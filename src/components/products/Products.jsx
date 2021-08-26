import React from 'react'
import FilterMeniu from './filter/FilterMeniu'
import ProductCard from './ProductCard'
import data from "../data/data";
// import dataProducts from "../../components/data/dataProductsService";

import { MyCartState } from '../../context/store/Context';

import {useState, useEffect} from 'react';
import SearchAndSort from './filter/SearchAndSort';
import axios from 'axios';


// trebuie sa iei id ul produsul sa il dai

function Products() {

const [products, setProducts] = useState([])
const [productCopy, setProductCopy] = useState([])


const {state}= MyCartState();
console.log(state)

useEffect(()=>{
  axios.get("http://localhost:8080//api/products/list").then(
    (response)=>{setProducts(response.data);setProductCopy(response.data)}
  )

},[])

const lista = []

for(let element of products.map((item)=>item.categoryType)){
  lista.push(element)
}

const removeDublicate =(lista)=>{
  return lista.filter((a,b)=>lista.indexOf(a)===b)
}

const handleClick= (e)=>{
 
  // let productCopy;
  if(e.target.value===""){
    setProductCopy(products)
  }
  if(e.target.value==="all"){
    setProductCopy(products)
  }
  else{
    let filteredData = products.filter(item=>item.categoryType===e.target.value)
    setProductCopy(filteredData)
  }
}


  const handleSearch=(e)=>{
    const searched= e.target.value;

    const foo = [...productCopy].filter((prod)=>{
      if(prod.productName.toLowerCase().includes(searched.toLowerCase())||
      prod.description.toLowerCase().includes(searched.toLowerCase())||
      prod.category.toLowerCase().includes(searched.toLowerCase())
      ){
        return prod;
      }

    })

    if(searched===""){
      setProductCopy(products)
    }else{
      setProductCopy(foo)
    }
      
  }


  const sortArray = e =>{
    const sorting = e.target.value;
    const sorted = [...productCopy].sort((a,b)=>{
      if(sorting==="desc"){
        return b.price-a.price
      }
      if(sorting==="asc"){
        return a.price-b.price
      }
    });
    setProductCopy(sorted)
  }
 
    return (
        <div className="bg-gray-200 pb-20">
           <div className="pt-20 z-30  border text-center  bg-white flex justify-center  fixed w-screen">
              <FilterMeniu item={"all"} handleClick={handleClick} key={Math.random()} />
            {removeDublicate(lista).map((item)=>(
              <FilterMeniu item={item} handleClick={handleClick} key={Math.random()}  />
            ))}
                

          
           </div>
           
           <SearchAndSort handleSearch={handleSearch} sortArray={sortArray}  />
           
           
           <div className="grid sm:grid-cols-4 gap-3 sm:pl-24 sm:pr-24 p-3 pt-48 sm:pt-60">
            
           {productCopy.length===0 ? (<div className=" flex justify-center"><div className="text-center  text-lg font-bold text-yellow-500 bg-black p-10 rounded-lg ">Sorry! Looks like we don't have that item.</div></div>):
             productCopy.map((item)=>(
             
              <div  key={Math.random()} id="RouterNavLink"><ProductCard  item={item} /></div>
             
             ))
           }
          </div>

        </div>
    )
}

export default Products
