import React from 'react'
import {useContext} from 'react'
import CartContext from '../../context/cart/CartContext';
import {Link } from "react-router-dom";

function CartTest({item}) {
    return (
        <div  className="text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white ">
            <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-55">
                <div className="text-sm py-2 px-4 font-normal block w-full">
                    <img className="rounded" src={item.images.pic1} alt="" />
                    <div className="flex justify-between py-2">
                      <h1> {item.name}</h1>
                      <i className="fas fa-trash-alt px-4 "></i>
                    </div>
                    <div className="flex justify-center">
                    <p className=""> Price :{item.price}</p>
                    </div>
                    <div className=" h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-55" />
              
                </div>
            </div>
        </div>
    )
}

export default CartTest
