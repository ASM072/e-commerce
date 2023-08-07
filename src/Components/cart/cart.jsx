import Button from '../buttons/button';
import './cart.scss';
import CartItem from '../cartitem/cartitem';
import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';
import { useNavigate } from 'react-router-dom';

const Cart = () =>
{
    const { cartItems } = useContext( CartContext );
    const navigate = useNavigate();
    
    const goToCheckoutHandler = () =>
    {
        navigate('/checkout')
    }
    return (
        <div className='cartDropDownContainer'>
            <div className='cartItems'>
                { cartItems.map( ( cartItem ) => (
                    <CartItem key={ cartItem.id } cartItem={ cartItem } /> ))}
            </div>
            <h1>cart is empty</h1>
            <Button onClick={goToCheckoutHandler}> Go To Checkout </Button>
        </div>
    )
}

export default Cart;