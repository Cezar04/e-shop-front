import React from 'react'
import FilterMeniu from './filter/FilterMeniu'
import ProductCard from './ProductCard'

function Products() {
    return (
        <div className="bg-gray-100">
           <div className="pt-28 border text-center bg-white">
             <FilterMeniu/>
           </div>
           <div className="grid sm:grid-cols-4 gap-2 sm:p-20 p-3  ">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
           </div>

        </div>
    )
}

export default Products
