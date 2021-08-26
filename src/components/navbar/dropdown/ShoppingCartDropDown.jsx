import React from 'react'


// import CartContext from '../../../context/cart/CartContext';
// import {useContext} from 'react';

import {MyCartState} from '../../../context/store/Context'

function ShoppingCartDropDown() {
  // const {cartItems, showHideCart} = useContext(CartContext);
  // console.log(cartItem)

  const{state:{cart}}=MyCartState()




 
    return (

      <>
      <div className="flex flex-wrap ">
        <div className="text-white  text-sm flex  items-center ">
          <i className="fas fa-shopping-cart" aria-hidden='true' ></i>
          {cart.length > 0 && <div className="text-sm font-semibold rounded-full px-2 bg-yellow-500 "><span>{cart.length}</span></div>  }
        </div>
      </div>
  
      </>



    )
}

export default ShoppingCartDropDown
