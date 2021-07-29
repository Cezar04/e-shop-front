import React from 'react'

function Categories() {
    return (
    <>
        <div className="grid sm:grid-cols-3 gap-4  grid-cols-1 self-auto p-5">
            <div className="kitchen  hover:bg-top  sm:col-span-2 bg-no-repeat bg-center bg-cover flex  py-10 sm:p-60">
                <h1 className="bg-yellow-500  sm:p-4 p-2 text-white sm:text-4xl font-medium uppercase ">kitchen</h1>
            </div>
            <div className="bedroom  bg-no-repeat bg-center bg-cover flex py-10 sm:p-60">
                <h1 className="bg-yellow-500 sm:p-4 p-2  text-white sm:text-4xl font-medium uppercase ">bedroom</h1>
            </div>
            <div className="bathroom  bg-center bg-cover flex  py-10 sm:p-60">
                <h1 className="bg-yellow-500 sm:p-4 p-2  text-white sm:text-4xl font-medium uppercase">bathroom</h1>
            </div>
            <div className="livingRoom  bg-bottom bg-cover sm:col-span-2 py-10 sm:p-60 flex  ">
                <h1 className="bg-yellow-500 sm:p-4 p-2  text-white sm:text-4xl font-medium uppercase">Living Room</h1>
            </div>

        </div>



         {/* <div className="grid sm:grid-cols-3 gap-4 flex  grid-cols-1 p-5">
            <div className="sm:-span-3 ">
                <img src="https://images.pexels.com/photos/3637728/pexels-photo-3637728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <h1 className="bg-yellow-500  sm:p-4 p-2 text-white sm:text-4xl font-medium uppercase ">kitchen</h1> 
            </div>

            <div className="col-span-2">
                <img className="h-52" src="https://images.pexels.com/photos/1374125/pexels-photo-1374125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className=" ">
                <img src="https://images.pexels.com/photos/6032203/pexels-photo-6032203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className=" sm:col-span-2 ">
                <img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
        </div>  */}
    </>
    )
}

export default Categories
