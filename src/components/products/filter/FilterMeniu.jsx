import React from 'react'


function FilterMeniu() {
    return (
        <div className="">
            <div className="flex justify-center items-center  ">
                <h1 className="uppercase pr-5 sm:mr-2 mr-1 border-2 border-gray-500 sm:p-4 p-1 sm:font-bold hover:bg-yellow-500 ">all</h1>
                <h1 className="uppercase pr-5 sm:mr-2 mr-1 border-2 border-gray-500 sm:p-4 p-1 sm:font-bold hover:bg-yellow-500">Kitchen</h1>
                <h1 className="uppercase pr-5 sm:mr-2 mr-1 border-2 border-gray-500 sm:p-4 p-1 sm:font-bold hover:bg-yellow-500">Bedroom</h1>
                <h1 className="uppercase  border-2 border-gray-500 sm:font-bold sm:p-4 p-1  hover:bg-yellow-500">Bathroom</h1>

            </div>
        </div>
    )
}

export default FilterMeniu
