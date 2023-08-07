import './checkout.scss';
import { useContext } from 'react';
import { CartContext } from '../../../context/cartcontext';
import CheckoutItem from '../../checkoutitem/checkoutitem';

const Checkout = () =>
{
    const { cartItems, addItemToCart, removeCartItem } = useContext( CartContext );
    return (
        <div className='checkoutContainer'>
            <div className='checkoutHeader'>
                <div className='headerBlock'>
                    <span>Product</span>
                </div>
                <div className='headerBlock'>
                    <span>Description</span>
                </div>
                <div className='headerBlock'>
                    <span>Quantity</span>
                </div>
                <div className='headerBlock'>
                    <span>Price</span>
                </div>
                <div className='headerBlock'>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                { cartItems.map( ( cartItem ) =>
                
                    (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                    
                 ) }
            </div>
                <span className='total'>Total: </span>
        </div>
    )
}

export default Checkout;