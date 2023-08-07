import './checkout.scss';
import { useContext } from 'react';
import { CartContext } from '../../../context/cartcontext';

const Checkout = () =>
{
    const { cartItems, addItemToCart, removeCartItem } = useContext( CartContext );
    return (
        <div>
            <div>
                <h2>hi</h2>
                { cartItems.map( ( cartItem ) =>
                {
                    const { id, name, quantity } = cartItem;
                    return (
                        <div key={ id }>
                            <h2>{ name }</h2>
                            <span>{ quantity }</span><br></br>
                            <span onClick={ () => removeCartItem( cartItem ) }>Remove</span><br></br>
                            <span onClick={ () => addItemToCart( cartItem ) }>Add</span>
                        </div>
                    );
                } ) }
            </div>
        </div>
    )
}

export default Checkout;