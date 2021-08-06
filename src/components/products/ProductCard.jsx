import React from 'react'
import {Link}from "react-router-dom";


function ProductCard(props) {
    const {item}=props;

    console.log(item.images.pic1)
    return (
        <div className="border bg-white pb-10 rounded hover:shadow-2xl ">
            <div className="p-1">
                <img className="h-64 w-screen rounded " src={item.images.pic1} alt="" />
            </div>
            <div className="p-5 ">
                <h1 className="pt-5 text-2xl font-bold ">{item.name}</h1>
                <p className="pt-3 text-lg text-gray-500 font-medium">{item.discription}</p>
                <p className="pt-5 text-yellow-500 text-medium font-medium uppercase">{item.stock ? 'in stock':'out of stock'}</p>
                <h1 className="text-center pt-10 text-2xl font-semibold">{item.price} <span>lei</span></h1>
            </div>

            <div className="pt-5 text-center">
                <Link to="" className=" bg-yellow-500 rounded hover:shadow-xl items-center p-4 font-medium text-white hover:text-black" >Add to Shopping Cart <i class="fas fa-shopping-cart text-red-500 "></i></Link>
            </div>
        </div>

    )
}

export default ProductCard
