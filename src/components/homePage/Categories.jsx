import React from 'react'


function Categories({item, handleClick}) {
  
    return (
    <>
        <div className="grid sm:grid-cols-3 gap-4  grid-cols-1 self-auto p-5" id="all">
            <div className="kitchen transform hover:shadow-2xl  sm:col-span-1 bg-no-repeat bg-center bg-cover flex  py-10 sm:p-60">
                <h1 value={item} onClick={handleClick} className="bg-yellow-500 hover:text-black sm:p-4 p-2 text-white sm:text-4xl font-medium uppercase " >all</h1>
            </div>
            <div className="kitchen transform hover:shadow-2xl sm:col-span-2 bg-no-repeat bg-center bg-cover flex  py-10 sm:p-60">
                <h1 className="bg-yellow-500 hover:text-black sm:p-4 p-2 text-white sm:text-4xl font-medium uppercase ">kitchen</h1>
            </div>
            <div className="bedroom transform hover:shadow-2xl bg-no-repeat sm:col-span-2 bg-center bg-cover flex py-10 sm:p-60">
                <h1 className="bg-yellow-500 sm:p-4 p-2 hover:text-black text-white sm:text-4xl font-medium uppercase ">bedroom</h1>
            </div>
            <div className="bathroom transform hover:shadow-2xl bg-center bg-cover flex  py-10 sm:p-60">
                <h1 className="bg-yellow-500 sm:p-4 p-2 hover:text-black text-white sm:text-4xl font-medium uppercase">bathroom</h1>
            </div>
            <div className="livingRoom transform hover:shadow-2xl bg-bottom bg-cover sm:col-span-3 py-10 sm:p-60 flex  ">
                <h1 className="bg-yellow-500 sm:p-4 p-2 hover:text-black text-white sm:text-4xl font-medium uppercase">Living Room</h1>
            </div>

        </div>

    </>
    )
}

export default Categories
