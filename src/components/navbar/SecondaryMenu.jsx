import React from 'react';

import AccountDropDown from './dropdown/AccountDropDown';
import ShoppingCartDropDown from './dropdown/ShoppingCartDropDown';
import SearchDropDown from './dropdown/SearchDropDown';

function SecondaryMenu() {
  
    return (
    <div className="flex">
      <SearchDropDown/>
      <ShoppingCartDropDown/>
      <AccountDropDown/>
     
    </div>
    

    )
}

export default SecondaryMenu
