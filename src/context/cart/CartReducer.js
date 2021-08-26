import{SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, HANDLE_CLICK} from '../Types';

const CartReducer=(state, acction)=> {
    switch(acction.type){
        case SHOW_HIDE_CART: {
            return{
                ...state,
                showCart: !state.showCart
            }
        }
        case ADD_TO_CART: {
            return{
                ...state,
                cartItems: [...state.cartItems, acction.payload],
               
            }
        }
        case REMOVE_ITEM :{
            return{
                ...state,
                cartItems:state.cartItems.filter(item=>item.id !== acction.payload)
            
            }
        }
        case HANDLE_CLICK : {
            return{
                ...state,
                products: [...state.products, acction.payload]
            }
        }
        
        default: 
        return state
    }
}

export default CartReducer
