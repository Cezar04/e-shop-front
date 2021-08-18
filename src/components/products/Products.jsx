import React from 'react'
import FilterMeniu from './filter/FilterMeniu'
import ProductCard from './ProductCard'
import {Link} from 'react-router-dom'
import data from "../data/data";

import {useState} from 'react';

// trebuie sa iei id ul produsul sa il dai

function Products() {
// dupa ce faci asta, sa te gandesti la cum pui totul in cartContext, si daca te ajuta

  const [products, setProducts] = useState(data.products)
  const [productCopy, setProductCopy] = useState(products)

const lista = []

for(let element of products.map((item)=>item.categoryType)){
  lista.push(element)
}

const removeDublicate =(lista)=>{
  return lista.filter((a,b)=>lista.indexOf(a)===b)
}

const handleClick= (e)=>{
  console.log(e.target.value)
  let productCopy;
  if(e.target.value==="all"){
    setProductCopy(products)
  }
  else{
    let filteredData = products.filter(item=>item.categoryType===e.target.value)
    setProductCopy(filteredData)
  }
}



    return (
        <div className="bg-gray-200 pb-20">
           <div className="pt-20  border text-center  bg-white flex justify-center">
              <FilterMeniu item={"all"} handleClick={handleClick} />
            {removeDublicate(lista).map((item)=>(
              <FilterMeniu item={item} handleClick={handleClick}  />
            ))}
                
         
          
           </div>
           <div className="grid sm:grid-cols-4 gap-3 sm:pl-24 sm:pr-24 p-3  ">
            
           {
             productCopy.map((item)=>(
             
              <div  key={item.id} id="RouterNavLink"><ProductCard  item={item}/></div>
             
             ))
           }
          </div>

        </div>
    )
}

export default Products
