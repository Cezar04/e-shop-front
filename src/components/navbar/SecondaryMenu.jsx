import React from 'react';

import AccountDropDown from './dropdown/AccountDropDown';
import ShoppingCartDropDown from './dropdown/ShoppingCartDropDown';


function SecondaryMenu() {
  
    return (
    <div className="flex">
      /
      <ShoppingCartDropDown/>
      <AccountDropDown/>
     
    </div>
    

    )
}

export default SecondaryMenu
