import Button from '../buttons/button';
import './cart.scss';
const Cart = () =>
{
    return (
        <div className='cartDropDownContainer'>
            <div className='cartItems'/>
            <Button>Go To Checkout </Button>
        </div>
    )
}

export default Cart;