import React from 'react'


function FilterMeniu() {
    return (
        <div className="">
            <div className="flex justify-center items-center  ">
                <h1 className="uppercase pr-5 mr-2 border-2 border-gray-500 p-4 font-bold hover:bg-yellow-500 ">all</h1>
                <h1 className="uppercase pr-5 mr-2 border-2 border-gray-500 p-4 font-bold hover:bg-yellow-500">Kitchen</h1>
                <h1 className="uppercase pr-5 mr-2 border-2 border-gray-500 p-4 font-bold hover:bg-yellow-500">Bedroom</h1>
                <h1 className="uppercase  border-2 border-gray-500 font-bold font-bold p-4 hover:bg-yellow-500">Bathroom</h1>

            </div>
        </div>
    )
}

export default FilterMeniu
