import React from 'react'

import data from '../../data/data'
import Carouselul from './Carousel';
import CartContext from '../../../context/cart/CartContext';
import {useContext} from 'react';



function ProductPage(props) {
    const {addToCart} = useContext(CartContext)

    const productId=props.match.params.id;
    const datatata=data.products
    const renderData=datatata[productId-1]


    const images=renderData.images
    const name= renderData.name

    return (
        <>


        <div className="sm:flex pb-36 sm:p-20 sm:pb-36">

                <Carouselul images={images} name={name}/>

            <div className="sm:pt-36 p-10 container">
       
                <h1 className="font-bold text-5xl sm:pt-8">{renderData.name}</h1>
                <h1 className="text-lg pt-5  container text-gray-500">{renderData.discription}</h1>
                <h1 className="sm:pt-20 pt-10 text-2xl font-bold">Price {renderData.price} <span>$</span></h1>
                <div className="pt-20 pb-10">
                <div onClick={()=>addToCart(renderData)} className="cursor-pointer bg-yellow-500 rounded hover:shadow-xl items-center p-4 sm:w-1/4 font-medium text-white hover:text-black" >Add to Shopping Cart <i className="fas fa-shopping-cart text-red-500 "></i></div>
            
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductPage
