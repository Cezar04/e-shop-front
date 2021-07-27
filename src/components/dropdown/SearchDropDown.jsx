import React, {useState} from 'react';
import { Transition } from "@headlessui/react";

function SearchDropDown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex flex-wrap">
            <button onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false" className="text-white font-bold uppercase text-sm px-6 py-3  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
                <i class="fas fa-search"></i>
            </button>
        </div>
    )
}

export default SearchDropDown
