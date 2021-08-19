import React from 'react'

function SearchAndSort({handleSearch, sortArray} ) {


    return (
        <div className="pt-32 sm:pt-40 p-5 bg-white z-10 flex justify-center text-gray-600 fixed w-screen">
            <input onChange={(e)=>handleSearch(e)} className="border-2 border-gray-500 bg-white sm:h-10 sm:px-5 px-1 sm:pr-16 rounded-lg text-sm focus:outline-none" type="search" name="search" placeholder="Search"/>
            <div className="">
            <select onChange={(e)=>sortArray(e)} className="border-2 border-gray-500 bg-white sm:h-10 p-1  rounded-lg text-sm ">
                <option value="select" >Select</option>
                <option  className="text-lg p-2" value="asc">Price ascending</option>
                <option  className="text-lg p-2" value="desc">Price descending</option>
            </select>
            </div>
        </div>
    )
}

export default SearchAndSort
