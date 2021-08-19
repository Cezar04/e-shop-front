import {useContext} from 'react'
import CartContext from '../../context/cart/CartContext';


function CartItem({item}) {
    const {removeItem} = useContext(CartContext);
    
    return (
        <div className="  border-t-4">
            
            <li className="flex">
                <img className="w-1/4" src={item.images.pic1} alt="" />
                <div className=" flex text-gray-600  m-">
                    <div className="text-sm font-semibold pt-5 pr-3">
                    {item.name}
                    </div>
                    <div className="text-sm font-semibold pt-5">
                    Price: {item.price}<span className="px-1">$</span>
                    </div>
                    <div>
                        
                    </div>
                    
                 
                </div>
            
                
            </li>
            <div className="text-sm py-5 text-gray-400 hover:text-gray-700  ">
                <button className=" text-sm" onClick={()=>removeItem(item.id)}>remove item <i className="fas fa-trash-alt"></i></button>
            </div>
    
         
        </div>
    )
}

export default CartItem
