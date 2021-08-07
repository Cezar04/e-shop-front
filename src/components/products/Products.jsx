import React from 'react'
import FilterMeniu from './filter/FilterMeniu'
import ProductCard from './ProductCard'
import {Link} from 'react-router-dom'
import data from "../data/data";

// trebuie sa iei id ul produsul sa il dai

function Products() {
const {products}= data

    return (
        <div className="bg-gray-100">
           <div className="pt-28 border text-center bg-white">
             <FilterMeniu/>
           </div>
           <div className="grid sm:grid-cols-4 gap-2 sm:p-20 p-3  ">
            
           {
             products.map((item)=>(
             
              <Link to={`/product-detail/${item.id}`} key={item.id} id="RouterNavLink"><ProductCard  item={item}/></Link>
             
             ))
           }
          </div>

        </div>
    )
}

export default Products
