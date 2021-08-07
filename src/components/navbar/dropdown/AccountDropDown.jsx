import React from 'react'
import { NavLink } from 'react-router-dom';
import {createPopper} from '@popperjs/core';


function AccountDropDown() {
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
        <div className="flex flex-wrap ">
          <div className="w-full sm:w-6/12 md:w-4/12 px-4 ">
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
               <i className="far fa-user"></i>
              </button>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white"
                }
                style={{ minWidth: "12rem" }}
              >
                  <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                <NavLink
                  to="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap " 
                  }
               
                >
                  My Account
                </NavLink>
                <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                <NavLink
                  to="/login"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white " 
                  }
                
                >
                 Login
                </NavLink>
                <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                <NavLink
                  to="/register"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-white " 
                  }
                  
                >
                  Register
                </NavLink>
                <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default AccountDropDown
