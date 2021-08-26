import { useReducer, useState } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer';
import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, HANDLE_CLICK} from '../Types'
import data from "../../components/data/data";


import React from 'react'



function CartState({children}) {
    const initialState = {
        showCart: false,
        cartItems: [],
        // products: data.products,
        // productCopy: data.products

    };

    const [ state, dispatch]= useReducer(CartReducer, initialState);



    const addToCart = item =>{
        dispatch({type: ADD_TO_CART, payload: item})
    }

    const showHideCart = ()=>{
        dispatch({type:SHOW_HIDE_CART})
    }

    const removeItem = (id)=>{
        dispatch({type:REMOVE_ITEM, payload:id})
    }

    // const onAdd=(item)=>{
    //     const exist = produs.find((x)=>x.id===info.id);
    //     if(exist){
    //         setProdus(
    //             produs.map((x)=>
    //                 x.id===info.id ? {...exist, qty: exist.qty+1}:x
    //             )
    //         );
    //     }else{
    //         setProdus([...produs,{...info, qty:1}])
    //     }
   
    // }
    return (
    

            <CartContext.Provider value = {{
                // onAdd,
                showCart: state.showCart,
                cartItems: state.cartItems,
                addToCart,
                showHideCart,
                removeItem,
            }}>
            {children}
            </CartContext.Provider>
            
   
    )
}

export default CartState
