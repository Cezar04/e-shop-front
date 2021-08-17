import React from 'react'
import FilterMeniu from './filter/FilterMeniu'
import ProductCard from './ProductCard'
import {Link} from 'react-router-dom'
import data from "../data/data";

// trebuie sa iei id ul produsul sa il dai

function Products() {
const {products}= data
const lista = []

for(let element of products.map((item)=>item.categoryType)){
  lista.push(element)
}

const removeDublicate =(lista)=>{
  return lista.filter((a,b)=>lista.indexOf(a)===b)
}

const handleClick= (e)=>{
  console.log(e.target.value)
}



    return (
        <div className="bg-gray-200">
           <div className="pt-20  border text-center  bg-white flex justify-center">
             <FilterMeniu item={"all"} handleClick={handleClick} />
            {removeDublicate(lista).map((item)=>(
            <FilterMeniu item={item} handleClick={handleClick}  />
            ))}
                
         
          
           </div>
           <div className="grid sm:grid-cols-4 gap-3 sm:pl-24 sm:pr-24 p-3  ">
            
           {
             products.map((item)=>(
             
              <div  key={item.id} id="RouterNavLink"><ProductCard  item={item}/></div>
             
             ))
           }
          </div>

        </div>
    )
}

export default Products
