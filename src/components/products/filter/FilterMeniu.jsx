import { hide } from '@popperjs/core';
import React from 'react'


function FilterMeniu({...products}) {
    const ceva= products.products;
  
    return (
        <div className="">
            {ceva.map((item)=>(
          <div className="flex justify-center items-center  ">
            <h1 className="uppercase pr-5 sm:mr-2 mr-1 border-b-2 border-gray-500 sm:p-4 p-1 sm:font-bold hover:bg-yellow-500 ">{item.categoryType.includes(!item.categoryType<1)?('esti prost'):(item.categoryType)}</h1>
      

        </div>
            ))}
  
        </div>
    )
}

export default FilterMeniu
