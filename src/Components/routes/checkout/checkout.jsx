import './checkout.scss';
import { useContext } from 'react';
import { CartContext } from '../../../context/cartcontext';
import CheckoutItem from '../../checkoutitem/checkoutitem';
import PaymentForm from '../../paymentform/paymentform';

const Checkout = () =>
{
    const { cI, cartTotal } = useContext( CartContext );
    return (
        <div className='checkoutContainer'>
            <div className='checkoutHeader'>
                <div className='navHeader'>
                    <span>Product</span>
                </div>
                <div className='navHeader'>
                    <span>Description</span>
                </div>
                <div className='navHeader'>
                    <span>Quantity</span>
                </div>
                <div className='navHeader'>
                    <span>Price</span>
                </div>
                <div className='navHeader'>
                    <span>Remove</span>
                </div>
            </div>
            <div>
                { cI.map( ( cartItem ) =>
                
                    (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
                    
                 ) }
            </div>
            <span className='total'>Total: PKR { cartTotal } </span>
            <PaymentForm/>
        </div>
    )
}

export default Checkout;