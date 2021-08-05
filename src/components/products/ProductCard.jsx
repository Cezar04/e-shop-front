import React from 'react'
import {Link}from "react-router-dom";


function ProductCard() {
    return (
        <div className="border bg-white pb-10 rounded hover:shadow-2xl ">
            <div className="p-1">
                <img className="h-64 w-screen rounded " src="https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            </div>
            <div className="p-5 ">
                <h1 className="pt-5 text-2xl font-bold ">Dormitor Cacaniu</h1>
                <p className="pt-3 text-lg text-gray-500 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, vel.</p>
                <p className="pt-5 text-green-500 text-medium font-medium uppercase">in stock</p>
                <h1 className="text-center pt-10 text-2xl font-semibold">3000 Lei</h1>
            </div>

            <div className="pt-5 text-center">
                <Link to="" className=" bg-yellow-500 rounded hover:shadow-xl items-center p-4 font-medium text-white hover:text-black" >Add to Shopping Cart <i class="fas fa-shopping-cart text-red-500 "></i></Link>
            </div>
        </div>

    )
}

export default ProductCard
