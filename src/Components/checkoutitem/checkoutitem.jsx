import './checkoutitem.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';

const CheckoutItem = ({cartItem}) =>
{
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeCartItems } = useContext( CartContext );
    const clearItemFromCartHandler = () => clearItemFromCart( cartItem );
    const addItemHandler = () => addItemToCart( cartItem );
    const removeItemHandler = () => removeCartItems ( cartItem );
    return (
        <div className='checkoutItemContainer'>
            <div className='imageContainer'>
                <img src={ imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>  
                <div className='arrow' onClick={ removeItemHandler }>&#10094; </div>
            <span className='value'> { quantity } </span>
                <div className='arrow' onClick={ addItemHandler }>&#10095; </div>
            </span>
            <span className='price'>{ price }</span>
            <div className='removeButton' onClick={clearItemFromCartHandler}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem