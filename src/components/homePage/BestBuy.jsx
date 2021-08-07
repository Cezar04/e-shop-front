import React from 'react';
import Carousel from 'react-elastic-carousel';

function BestBuy() {
    const breakPoints=[
        {width:500, itemsToShow: 1},
        {width:768, itemsToShow: 2},
        {width:1200, itemsToShow: 3}
    ];
    

    return (
        <div className='sm:p-10 p-4'>
            <div className="flex justify-center uppercase">
                <h1 className="text-yellow-500 p-10 font-medium xl:text-5xl text-3xl mb-4 text-center md:text-center lg:text-center">Top sellers</h1>
            </div>
            <Carousel className="" breakPoints={breakPoints} enableAutoPlay={true} >

                <div className=" sm:m-9  w-screen sm:h-96  ">
                    <img className="" src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <h1 className="bg-yellow-500 p-3 text-white sm:text-4xl font-medium uppercase">Orange Sofa</h1>

                </div>
                <div className=" sm:m-9  w-screen sm:h-96 ">
                    <img className="" src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <h1 className="bg-yellow-500 p-3 text-white sm:text-4xl font-medium uppercase">Orange Sofa</h1>

                </div>
                <div className=" sm:m-9  w-screen sm:h-96 ">
                    <img className="" src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <h1 className="bg-yellow-500 p-3 text-white sm:text-4xl font-medium uppercase">Orange Sofa</h1>

                </div>
                <div className=" sm:m-9  w-screen sm:h-96 ">
                    <img className="" src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <h1 className="bg-yellow-500 p-3 text-white sm:text-4xl font-medium uppercase">Orange Sofa</h1>

                </div>
                <div className=" sm:m-9  w-screen sm:h-96 ">
                    <img className="" src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <h1 className="bg-yellow-500 p-3 text-white sm:text-4xl font-medium uppercase">Orange Sofa</h1>

                </div>
                <div className=" sm:m-9  w-screen sm:h-96 ">
                    <img className="" src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                    <h1 className="bg-yellow-500 p-3 text-white sm:text-4xl font-medium uppercase">Orange Sofa</h1>

                </div>
                
            </Carousel>
            
        </div>
    )
}

export default BestBuy
