import './cartitem.scss';

const CartItem = ({cartItem}) =>
{
    const { name, quantity, imageUrl, price } = cartItem;
    return (
        <div className='cartItemContainer'>
            <img src={ imageUrl } alt={ `${ name }` } />
            <div className='itemDetail'>
                <span className='name'>{ name }</span>
                <span className='price'>{ quantity } x ${ price }</span>
            </div>
        </div>
    )
}

export default CartItem;