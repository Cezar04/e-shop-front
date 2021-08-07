import React, { useState } from "react";
// TODO modifica mult
function Testimonials() {
    const [change, setChange] = useState(false);
    return (
        <div>
            <div className="container mx-auto pt-16 p-5">
                <h1 className="text-yellow-500 font-medium xl:text-5xl text-3xl mb-4 text-center md:text-center lg:text-center">Hear From Our Customers</h1>
                <p className="text-xl text-center md:text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto text-gray-600 mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusamus fugiat vel sint esse minus optio sapiente consequatur maiores explicabo!</p>
            </div>
            <div className="w-full bg-gray-100 py-36">
                <div className=" container relative mx-auto">
              
              
                    <section id="carousel" >
                        <figure className={change ? "hidden" : "block"}>
                            <div className="w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative">
                                <div className="flex items-center justify-between pb-8">
                                    <div className="xl:flex md:flex lg:flex sm:flex items-center">
                                        <div className="h-20 w-20">
                                            <img src="https://cdn.tuk.dev/assets/photo-1544817747-b11e3e3b6ac2.jfif" alt="" className="rounded-full object-cover h-full w-full shadow" />
                                        </div>
                                        <div className="xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4">
                                            <p className="text-xl text-gray-600 font-bold">Jane Doe</p>
                                            <p className="sm:text-xl text-sm text-gray-600">Lorem, ipsum.</p>
                                        </div>
                                    </div>
                                    <svg width={85} height={65} xmlns="http://www.w3.org/2000/svg">
                                        <text transform="rotate(-180 475.5 56.5)" fill="#F19E34" fillRule="evenodd" fontFamily="ProximaNova-Extrabld, Proxima Nova" fontSize={200} fontWeight={600} letterSpacing="1.667">
                                            <tspan x={860} y={184}>
                                                “
                                            </tspan>
                                        </text>
                                    </svg>
                                </div>
                                <p className="text-base text-gray-600 pb-6 w-full sm:w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, earum mollitia! Minima eveniet fuga commodi reiciendis nisi voluptatum a optio, beatae, accusantium dignissimos id doloremque asperiores, cupiditate neque tenetur cumque?</p>
                                <p className="text-base text-gray-600 w-full sm:w-10/12">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, est? Sit provident nihil odio ipsam optio illo sunt dolorem possimus voluptas, praesentium voluptatum blanditiis facilis iure at a nam aliquam.</p>
                                <img src="https://cdn.tuk.dev/assets/Path-right-arrow.png" alt="" className="absolute right-0 mr-16 sm:-mt-6 cursor-pointer" onClick={() => setChange(!change)} />
                            </div>
                        </figure>
                        <figure className={change ? "block" : "hidden"}>
                            <div className="w-11/12 mx-auto bg-white py-10 sm:px-16 px-10 relative">
                                <div className="flex items-center justify-between pb-8">
                                    <div className="xl:flex md:flex lg:flex sm:flex items-center">
                                        <div className="h-20 w-20">
                                            <img src="https://cdn.tuk.dev/assets/templates/Project+Management/pm_15.png" alt="" className="rounded-full object-cover h-full w-full shadow" />
                                        </div>
                                        <div className="xl:pl-6 lg:pl-6 md:pl-6 sm:pl-6 sm:pt-0 pt-4">
                                            <p className="text-xl text-gray-600 font-bold">Richard Stark</p>
                                            <p className="sm:text-xl text-sm text-gray-600">Lorem, ipsum dolor.</p>
                                        </div>
                                    </div>
                                    <svg width={85} height={65} xmlns="http://www.w3.org/2000/svg">
                                        <text transform="rotate(-180 475.5 56.5)" fill="#F19E34" fillRule="evenodd" fontFamily="ProximaNova-Extrabld, Proxima Nova" fontSize={200} fontWeight={600} letterSpacing="1.667">
                                            <tspan x={860} y={184}>
                                                “
                                            </tspan>
                                        </text>
                                    </svg>
                                </div>
                                <p className="text-base text-gray-600 pb-6 w-full sm:w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorem.</p>
                                <p className="text-base text-gray-600 w-full sm:w-10/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quod voluptatem earum ratione incidunt esse, excepturi officiis laborum, soluta id quidem animi cum cumque repellat veniam itaque voluptas architecto quia?</p>
                                <img src="https://cdn.tuk.dev/assets/Path-right-arrow.png" alt="" className="absolute right-0 mr-16 sm:-mt-6 cursor-pointer" onClick={() => setChange(!change)} />
                            </div>
                        </figure>
                    </section>
                </div>
            </div>
        </div>
    );

}

export default Testimonials
