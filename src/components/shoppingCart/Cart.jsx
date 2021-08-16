
import {useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';


function Cart() {
    const {showCart, cartItems, showHideCart}= useContext(CartContext);

    return (
       <>
        {showCart && (
            <div className="absolute  z-40 bg-white w-screen pt-20 border-4 border-black">
                <div className="">
                    <i style={{cursor:'pointer'}} className="fa fa-times-circle text-2xl ml-5" aria-hidden='true' onClick={showHideCart}></i>
                </div>
                <div className="flex justify-center  ">
                    {cartItems.length === 0 ? (<h3 className="font-medium capitalize py-10">Cart is empty</h3>):(
                        <ul>
                            {cartItems.map(item=>(
                                <CartItem key={item.id} item={item}/>
                                
                            ))}    
                        </ul>
                    )}
                </div>
                <div className="uppercase text-lg py-5 font-bold flex justify-center border-black border-t-4 m-auto ">
                total {cartItems.length===0? "0": cartItems.reduce((ammount, price)=>ammount + parseInt(price.price),0)} <span className="px-2">$</span>
                </div>
                {cartItems.length===0 ? (""):
                
                ( <div className={"  flex justify-center uppercase bg-yellow-500 mx-20 mb-5 rounded hover:shadow-xl items-center p-4 font-medium text-white hover:text-black"}>
                <Link  to="/shopping-cart">Go To checkout</Link>
            </div>)}
               
            </div>
            
        ) }
       </>
    )
}

export default Cart
