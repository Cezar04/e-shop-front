import {useContext} from 'react'
import CartContext from '../../context/cart/CartContext';


function CartItem({item}) {
    const {removeItem} = useContext(CartContext);
    
    return (
        <div className="flex justify-between  border-t-4 pt-20">
            <li className="">
                <img className="" src={item.images.pic1} alt="" />
                <div className=" flex justify-center">
                    <div className="text-xl font-semibold p-5">
                    {item.name}
                    </div>
                    <div className="text-xl font-semibold p-5">
                    {item.price}<span className="px-1">$</span>
                    </div>
                    
                 
                </div>
                <div className="font-medium py-5 px-2 text-red-600 flex justify-center   ">
                <button className="uppercase font-bold" onClick={()=>removeItem(item.id)}>remove item <i className="fas fa-trash-alt"></i></button>
                </div>
                
            </li>
    
         
        </div>
    )
}

export default CartItem
