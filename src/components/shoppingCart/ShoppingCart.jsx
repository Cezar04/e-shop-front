import {useContext} from 'react';
import CartContext from '../../context/cart/CartContext';
import CartItem  from './CartItem';



function ShoppingCart() {
     const {cartItems} = useContext(CartContext)
     console.log(cartItems)

    return (
        <div className="sm:flex justify-between py-36 pr-10 pl-10">
            <div className="flex flex-col w-full p-8 m-3 bg-white shadow-lg pin-r pin-y sm:w-4/5">
            {cartItems.length === 0 ? (<h3 className="font-medium capitalize  py-10">Cart is empty</h3>):(
                        <ul>
                            {cartItems.map((item) =>(
                                <CartItem key={Math.random()} item={item}/>
                                
                            ))}    
                        </ul>
                    )}
            </div>

            <div className="flex felx-col w-full p-8 bg-white shadow-lg pin-r pin-y sm:w-1/2">
                <h1>aici pun altceva</h1>
            </div>
            
        </div>
    )
}

export default ShoppingCart
