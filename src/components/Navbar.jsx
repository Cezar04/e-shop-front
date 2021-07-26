import React,{useState} from 'react';
import { Transition } from "@headlessui/react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
<div>
    <nav className="bg-gray-800">
        <div className="  mx-auto px-4  sm:px-6 lg:px-8">
        
        <div className="flex justify-between h-16 items-center ">
            

                <div className="flex">
                    <h1 className="text-white text-2xl font-medium">E-ShopLOGO</h1>
                </div>

                <div className="hidden md:block">
                       <ul className="flex ">
                           <li className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Meniu1</li>
                           <li className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Meniu2</li>
                           <li className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">Meniu3</li>
                       </ul>
                </div>

                <div className="hidden md:block">
                        <ul className="flex ">
                           <li className=" text-white  font-medium px-4"><i class="fas fa-search"></i></li>
                           <li className=" text-white block font-medium px-4"><i class="fas fa-shopping-cart"></i></li>
                           <li className=" text-white font-medium px-4"><i class="far fa-user"></i></li>
                       </ul>
                </div>
                 
          
            
         
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
               
                  <a
                    href="#"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Meniu1
                  </a>
  
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Meniu2
                  </a>
  
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Meniu3
                  </a>
                </div>
              </div>
            )}
          </Transition>
    </nav>
</div>
    )
}

export default Navbar
