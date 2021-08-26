import React from 'react'

import data from '../../data/data'
import Carouselul from './Carousel';
import CartContext from '../../../context/cart/CartContext';
import {useContext, useEffect, useState} from 'react';

import { MyCartState } from '../../../context/store/Context';
import dataProductsService from '../../data/dataProductsService';

import { Carousel } from 'react-carousel-minimal';


const captionStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
}
const slideNumberStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
}

function ProductPage(props) {
   const [singleProd, setSingleProd] = useState([])
    const {
        state:{cart},
        dispatch,
    } = MyCartState();
    // const {addToCart} = useContext(CartContext)

    const productId=props.match.params.id;
   
    useEffect(() => {
        dataProductsService.getSingleProduct(productId).then(
            (result)=>{setSingleProd(result.data)}
        )
    }, [])
    let images=singleProd.productImage
    const data = [
        {
          image:images.pic1,
          caption:""
        },
        {
          image:images.pic2,
          caption: ""
        },
        {
          image:images.pic3,
          caption: ""
        }
        
      ];
    
    


    return (
        <>


        <div className="sm:flex pb-36 sm:p-20 sm:pb-36">

                {/* <Carouselul images={images}/> */}
                <>
                <div className="App pt-20">
      <div style={{ textAlign: "center" }}>
        
        <div className="" style={{
          
        }}>
          <Carousel
            data={data}
            time={4000}
            width="200rem"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
        
          />
        </div>
      </div>
    </div>
                </>

            <div className="sm:pt-36 p-10 container">
       
                <h1 className="font-bold text-5xl sm:pt-8">{singleProd.productName}</h1>
                <h1 className="text-lg pt-5  container text-gray-500">{singleProd.description}</h1>
                <h1 className="sm:pt-20 pt-10 text-2xl font-bold">Price {singleProd.price} <span>$</span></h1>
                <div className="pt-20 pb-10">
                <div onClick={()=>dispatch({type:'ADD_TO_CART',payload:singleProd})} className="cursor-pointer bg-yellow-500 rounded hover:shadow-xl items-center p-4 sm:w-1/4 font-medium text-white hover:text-black" >Add to Shopping Cart <i className="fas fa-shopping-cart text-red-500 "></i></div>
            
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage
