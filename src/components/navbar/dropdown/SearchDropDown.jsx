import React, {useState} from 'react';
import { Transition } from "@headlessui/react";

function SearchDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" md:flex  ">
            <button onClick={() => setIsOpen(!isOpen)} 
                  type="button"
                  aria-controls="mobile-menu"
                  aria-expanded="false" className="text-white font-bold uppercase text-sm px-4 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
                <i className="fas fa-search"></i>
            </button>
            <Transition show={isOpen}
            enter="transition ease-out duration-100 transform "
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
                {()=>(
                    <div className="fixed " id="mobile-menu">
                        <div className=" pt-3 pb-3 md:pt-14">
                            <input type="text " className="p-3 rounded border-2  border-blue-300 shadow-xl" placeholder="search..."/>

                        </div>

                    </div>
                )}

            </Transition>
        </div>
    )
}

export default SearchDropDown
