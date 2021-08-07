import React from 'react'

function ShoppingCart() {
    return (
        <div className="flex justify-center py-36">
            <div className="flex flex-col w-full p-8 bg-white shadow-lg pin-r pin-y sm:w-4/5">
                <div className="flex-1">
                    <table className="w-full text-sm sm:text-base" cellSpacing="0">
                        <thead>
                            <tr className="h-12 uppercase">
                                <th className="hidden sm:table-cell"></th>
                                <th className="text-left">Product</th>
                                <th className="lg:text-right text-left pl-5 lg:pl-0">
                                    <span className="lg:hidden" title="Quantity">Qtd</span>
                                    <span className="hidden lg:inline">Quantity</span>
                                </th>
                                <th className="hidden text-right md:table-cell">Unit price</th>
                                <th className="text-right">Total price</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="hidden pb-4 sm:table-cell">
                                    <div href="">
                                        <img className="w-20" src="https://limg.app/i/Calm-Cormorant-Catholic-Pinball-Blaster-yM4oub.jpeg" alt="" />
                                    </div>
                                </td>
                                <td>
                                    <div href="#">
                                        <p class="mb-2 md:ml-4">Earphone</p>
                                        <form action="" method="POST">
                                        <button type="submit" class="text-gray-700 md:ml-4">
                                            <small><i class="fas fa-trash-alt"></i></small>
                                        </button>
                                        </form>
                                    </div>
                                </td>
                                <td class="justify-center md:justify-end md:flex mt-6">
                                    <div class="w-20 h-10">
                                        <div class="relative flex flex-row w-full h-8">
                                        <input type="number" value="2" 
                                        class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                        </div>
                                    </div>
                                </td>
                              
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    )
}

export default ShoppingCart
