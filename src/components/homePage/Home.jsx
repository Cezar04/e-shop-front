import React from 'react'
import Header from './Header'
import Categories from './Categories'
import BestBuy from './BestBuy'
import Testimonials from './Testimonials'
import data from "../data/data";
import {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Home() {
//     const [products, setProducts] = useState(data.products)
//     const [productCopy, setProductCopy] = useState(products)

//     const lista = []

// for(let element of products.map((item)=>item.categoryType)){
//   lista.push(element)
// }

// const removeDublicate =(lista)=>{
//   return lista.filter((a,b)=>lista.indexOf(a)===b)
// }

// const handleClick= (e)=>{
//   console.log(e.target.value)
//   // let productCopy;
//   if(e.target.value==="all"){
//     setProductCopy(products)
//   }
//   else{
//     let filteredData = products.filter(item=>item.categoryType===e.target.value)
//     setProductCopy(filteredData)
//   }
// }

    return (
        <div>
            <Header/>
           
           <Link to="/shop"><Categories /></Link> 
         
            <BestBuy/>
            <Testimonials/>

        </div>
    )
}
