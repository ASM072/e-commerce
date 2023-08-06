import Button from '../buttons/button';
import './cart.scss';
import CartItem from '../cartitem/cartitem';
import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';

const Cart = () =>
{
    const { cartItem } = useContext( CartContext );
    return (
        <div className='cartDropDownContainer'>
            <div className='cartItems'>
                {[].map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <h1>cart is empty</h1>
            <Button>Go To Checkout </Button>
        </div>
    )
}

export default Cart;