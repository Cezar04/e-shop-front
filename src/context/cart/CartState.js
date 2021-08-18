import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from './CartReducer';
import {SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, HANDLE_CLICK} from '../Types'
import data from "../../components/data/data";


import React from 'react'



function CartState({children}) {
    const initialState = {
        showCart: false,
        cartItems: [],
        products: data.products,
        productCopy: data.products

    };

    const [ state, dispatch]= useReducer(CartReducer, initialState);

    const handleClick = (e)=>{
        dispatch({type:HANDLE_CLICK, payload:e})
    }


    const addToCart = item =>{
        dispatch({type: ADD_TO_CART, payload: item})
    }

    const showHideCart = ()=>{
        dispatch({type:SHOW_HIDE_CART})
    }

    const removeItem = (id)=>{
        dispatch({type:REMOVE_ITEM, payload:id})
    }
    return (
    

            <CartContext.Provider value = {{
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
