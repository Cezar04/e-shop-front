import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import dataProducts from "../../components/data/dataProductsService";
import {cartItemReducer} from "./cartItemReducer";

import React from 'react'

const MyCart= createContext();

function Context({children}) {
    const [products, setProducts] = useState([])
    const [mama, setMama]= useState(false)
  
    useEffect(() => {
        dataProducts.getAllProducts().then(setMama(true)).then(
            (response)=>{setProducts(response.data)}
        )
    }, [mama])
 


    const [state, dispatch] = useReducer(cartItemReducer, {
        products:products,
        cart:[]
    })
 

    return  <MyCart.Provider value={{state, dispatch}}>{children}</MyCart.Provider>
   
}

export default Context

export const MyCartState=()=>{
    return useContext(MyCart)
}


