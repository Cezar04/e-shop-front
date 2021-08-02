import React from 'react';


function Header() {
  return (
    <div className="sm:flex bg-black ">
  
      <div className="">
        <img className="static h-screen  sm:pt-36 sm:pl-36 sm:pb-36 sm:w-screen sm:pr-10" src="https://images.pexels.com/photos/3965520/pexels-photo-3965520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        <a href="#all" className="font-medium hover:text-black absolute top-3/4  sm:top-2/4 bg-yellow-500 text-3xl p-6 text-white sm:transform sm:rotate-90">DISCOVER ---------> </a>
      </div>
      <div className="my-auto p-7">
        <h1 className="text-white  absolute top-1/4 text-5xl sm:top-36 sm:text-8xl font-medium sm:pb-8">Lifestyle</h1>
        <h1 className="text-white sm:text-8xl absolute top-1/4 py-20 pl-20 sm:py-7 text-5xl font-medium sm:pl-36">- Furniture</h1>
        <p className="text-white p-10 text-xl border-l-4 border-yellow-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quo minima pariatur ipsum at similique temporibus excepturi, adipisci nesciunt libero.</p>
        <div className="py-7">
          <a href="#" className=" py-2 bg-yellow-500 font-medium text-3xl p-6 text-white uppercase hover:text-black">about us</a>
        </div>
      </div>

      <div className="sm:my-auto hidden sm:block">
        <a href="#"><h1 className="text-white transform rotate-90">facebook</h1></a> 
        <a href="#"><h1 className="text-white transform rotate-90 sm:pl-36">instagram</h1></a>
      </div>
    </div>
  )
}

export default Header
