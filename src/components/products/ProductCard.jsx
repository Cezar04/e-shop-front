import React from 'react'
import CartContext from '../../context/cart/CartContext';
import {useContext} from 'react';
import {Link} from 'react-router-dom';


function ProductCard(props) {
    const {item}=props;
    // const {addToCart} = useContext(CartContext)
    

    return (
        <div className="border bg-white pb-10 rounded hover:shadow-2xl">

            <button >text</button>
            <Link to={`/product-detail/${item.id}`}>
           
            <div className="p-1">
                <img className="h-64 w-screen rounded " src={item.productImage.pic1} alt="" />
            </div>
            <div className="p-5 ">
                <h1 className="text-3xl font-bold ">{item.productName}</h1>
            {item.stock? (<p className="pt-5 text-yellow-500 text-medium font-semibold uppercase">in stock</p>) :(<p className="pt-5 text-red-500 font-semibold uppercase">out of stock</p>)}
                <h1 className=" pt-5 text-xl font-medium">Price: {item.price} <span>$</span></h1>
            </div>
            </Link>
            <div className="pt-5 text-center">
                {/* <div  className="cursor-pointer ml-16 mr-16 bg-yellow-500 rounded hover:shadow-xl items-center p-4 font-medium text-white hover:text-black" onClick={()=>addToCart(item)} >Add to Shopping Cart <i className="fas fa-shopping-cart text-red-500 "></i></div> */}
            </div>
        </div>

    )
}

export default ProductCard
