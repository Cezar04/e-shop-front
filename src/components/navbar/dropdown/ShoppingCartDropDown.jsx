import React from 'react'
import {createPopper} from '@popperjs/core';

function ShoppingCartDropDown() {
      // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement:"auto"
        });
        setDropdownPopoverShow(true);
        };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
        };


    return (
  <>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 md:w-4/12 px-4">
            <div className="relative inline-flex align-middle w-full">
              <button
                className={
                  "text-white font-bold uppercase text-sm px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " 
                }
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover();
                }}
       
              >
              <i class="fas fa-shopping-cart"></i>
              </button>

              
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white"
                }
                style={{ minWidth: "12rem" }}
              >
                <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-55" />
                <div
                 
                  className={
                    "text-sm py-2 px-4 font-normal block w-full  " 
                  }
                  
                >
                  
                  
                    <img className="rounded" src="https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                  
                  <div className="flex justify-between py-2">
                      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, sapiente.</h1>
                      <i className="fas fa-trash-alt px-4 "></i>
                  </div>
              
                  <div className="flex justify-center">
                    <p className=""> Price : 200</p>
                  </div>

                </div>
                <div className=" h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-55" />



                <div className="flex justify-items-center">
                    <button className="mx-auto bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"> <i class="fas fa-shopping-cart pr-4"></i>Checkout</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default ShoppingCartDropDown
