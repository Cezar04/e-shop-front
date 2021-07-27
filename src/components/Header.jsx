import React from 'react'
// mai trebuie facut si pt mobil
function Header() {
  return (
    <div className="md:flex bg-black ">
  
      <div className="">

        <img className="static h-screen  md:pt-36 md:pl-36 md:pb-36 sm:w-screen md:pr-10" src="https://images.pexels.com/photos/3965520/pexels-photo-3965520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        <a href="#" className="font-medium absolute top-2/4 bg-yellow-500 text-3xl p-6 text-white transform rotate-90">DISCOVER ---------></a>

      </div>
      <div className="my-auto p-7 ">
        <h1 className="text-white text-8xl font-medium pb-8">Lifstyle</h1>
        <h1 className="text-white text-8xl font-medium pl-36">- Furniture</h1>
        <p className="text-white p-10 text-xl border-l-4 border-yellow-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quo minima pariatur ipsum at similique temporibus excepturi, adipisci nesciunt libero.</p>
        <div className="py-7">
        <a href="#" className=" py-2 bg-yellow-500 font-medium text-3xl p-6 text-white uppercase">about us</a>
        </div>

      </div>

      <div className="my-auto">
       <a href="#"><h1 className="text-white transform rotate-90 ">facebook</h1></a> 
        <a href="#"><h1 className="text-white transform rotate-90 pl-36">instagram</h1></a>

      </div>
    </div>
  )
}

export default Header
