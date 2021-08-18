import { hide } from '@popperjs/core';
import React from 'react'


function FilterMeniu({item, handleClick}) {
    

    

    return (
        <>
        <div className="w-1/4 sm:w-32">        
            <div className="flex justify-center   ">            
                <button value={item} onClick={handleClick}  className="uppercase text-sm rounded-t-md sm:p-5 sm:mr-2 mr-1 border-b-2 border-gray-500 sm:p-4 p-1 sm:font-bold hover:bg-yellow-500 ">{item}</button>        
            </div>
        </div>

    

        </>
    )
}

export default FilterMeniu
