import Button from '../buttons/button';
import { CartDropDownContainer, EmptyMessage, CartItems } from './cartstyle';
import CartItem from '../cartitem/cartitem';
import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';
import { useNavigate } from 'react-router-dom';

const Cart = () =>
{
    const { cI } = useContext( CartContext );
    const navigate = useNavigate();
    
    const goToCheckoutHandler = () =>
    {
        navigate('/checkout')
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                { cI.length ? (cI.map( ( cartItem ) => (
                    <CartItem key={ cartItem.id } cartItem={ cartItem } /> ) ) ) : (
                        <EmptyMessage>
                            Your Cart is Empty!
                        </EmptyMessage>
                    )}
            </CartItems>
            <Button onClick={goToCheckoutHandler}> Go To Checkout </Button>
        </CartDropDownContainer>
    )
}

export default Cart;