import React from 'react'
import Carousel from 'react-elastic-carousel';

function ProductPage() {
    const breakPoints=[
        {width:500, itemsToShow: 1},
        {width:768, itemsToShow: 2},
        {width:1200, itemsToShow: 3}
    ];
    return (
        <div className="sm:flex">
            <Carousel className="pt-36 pb-36" >

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
                

            </Carousel>
            <div className="pt-36">
               
                <h1>Numele canapelei</h1>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, vero dolorem cupiditate amet neque voluptatibus voluptatum commodi deleniti laudantium sequi, optio eius sunt dolores natus eos dignissimos velit accusantium! Dicta.</h1>
                <h1></h1>
            </div>
        </div>
    )
}

export default ProductPage
