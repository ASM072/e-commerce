import Button from '../buttons/button';
import './cart.scss';
import CartItem from '../cartitem/cartitem';



const Cart = () =>
{
    return (
        <div className='cartDropDownContainer'>
            <div className='cartItems'>
                {[].map(item => <CartItem cartItem={item}/>)}
            </div>
            <h1>cart is empty</h1>
            <Button>Go To Checkout </Button>
        </div>
    )
}

export default Cart;