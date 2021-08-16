import React from 'react'
import {createPopper} from '@popperjs/core';
import { Link } from 'react-router-dom';
import CartContext from '../../../context/cart/CartContext';
import {useContext} from 'react';
import CartTest from '../../shoppingCart/CartTest';


function ShoppingCartDropDown() {
  const {cartItems, showHideCart} = useContext(CartContext);
  // console.log(cartItem)


 
    return (

      <>
      <div className="flex flex-wrap ">
        <div className="text-white  text-sm flex items-center ">
          <i className="fas fa-shopping-cart" aria-hidden='true' onClick={showHideCart}></i>
          {cartItems.length > 0 && <div className="text-lg rounded-full px-2 font-medium"><span>{cartItems.length}</span></div>  }
        </div>
      </div>
  
      </>
//   <>
//         <div className="flex flex-wrap">
//           <div className="w-full sm:w-6/12 md:w-4/12 ">
//             <div className="relative inline-flex align-middle w-full">
//               <div
//                 className={
//                   "text-white font-bold uppercase text-sm  py-3 flex outline-none focus:outline-none  ease-linear transition-all duration-150 " 
//                 }
//                 // type="button"
//                 ref={btnDropdownRef}
//                 onClick={() => {
//                   dropdownPopoverShow
//                     ? closeDropdownPopover()
//                     : openDropdownPopover();
//                 }}
       
//               >
//               <i className="fas fa-shopping-cart"></i>
             
//               </div>
//               {cartItems.length === 0 ? (<h3 className="font-medium capitalize py-10">Cart is empty</h3>):(
//                        <div>

                  
//                             {cartItems.map(item=>(
                                
                           
              
//               <div
//                 ref={popoverDropdownRef}
//                 className={
//                   (dropdownPopoverShow ? "block " : "hidden ") +
//                   "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white"
//                 }
//                 // className="text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white  hover:block"
//                 style={{ minWidth: "12rem" }}
//               >
//                 <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-55" />
//                 <div
                 
//                   className={
//                     "text-sm py-2 px-4 font-normal block w-full  " 
//                   }
                  
//                 >
                  
                  
//                     <img className="rounded" src={item.images.pic1} alt="" />
                  
//                   <div className="flex justify-between py-2">
//                       <h1>{item.name}</h1>
//                       <i className="fas fa-trash-alt px-4 "></i>
//                   </div>
              
//                   <div className="flex justify-center">
//                     <p className=""> Price :{item.price}</p>
//                   </div>

//                 </div>
//                 <div className=" h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-55" />



//                 <div className="flex justify-items-center">
//                     <Link to="/shopping-cart"><button className="mx-auto bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"> <i className="fas fa-shopping-cart pr-4"></i>Checkout</button></Link>

//                 </div>
//               </div> 

                     
// ))}    
//      </div>
                      
// )}
//             </div>
//           </div>
//         </div>
//       </>


    )
}

export default ShoppingCartDropDown
