
// import {useContext} from 'react';
import { Link } from 'react-router-dom';
// import CartContext from '../../context/cart/CartContext';
import CartItem from './CartItem';


function Cart() {
    // const {showCart, cartItems, showHideCart,}= useContext(CartContext);
    // let numarElemente= cartItems.map((i)=>i.id).reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {})
    // console.log(cartItems.map(({item,qty})=> item))

    // let rezultat = numarElemente.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
//    let plmp = Object.values(numarElemente)

    return (
       <>
        {/* {showCart && ( */}
            
            <div className="absolute   z-40 bg-gray-100 w-screen sm:w-1/6  -right-0 pt-20 ">
                <div className="">
                    {/* <i style={{cursor:'pointer'}} className="fa fa-times-circle text-xl ml-5" aria-hidden='true' onClick={showHideCart}></i> */}
                </div>
                <div className="flex justify-center overflow-auto h-48 ">
                    {/* {cartItems.length === 0 ? (<h3 className="font-medium capitalize  py-10">Cart is empty</h3>):(
                        <ul>
                            {cartItems.map((item) =>(
                                <CartItem key={Math.random()} item={item}/>
                                
                            ))}    
                        </ul>
                    )} */}
                </div>
                <div className="uppercase  py-5 font-bold flex justify-center  border-t-4 m-auto ">
                        {/* total {cartItems.length===0? "0": cartItems.reduce((ammount, price)=>ammount + parseInt(price.price),0)} <span className="px-2">$</span> */}
                </div>
                {/* {cartItems.length===0 ? (""): */}
                
                ( <div className={"  flex justify-center uppercase bg-yellow-500 mx-5 mb-5 rounded hover:shadow-xl items-center p-1 font-medium text-white hover:text-black"}>
                <Link  to="/shopping-cart">Go To checkout</Link>
                </div>)}
               
            </div>
            
        {/* ) } */}
       </>
    )
}

export default Cart
