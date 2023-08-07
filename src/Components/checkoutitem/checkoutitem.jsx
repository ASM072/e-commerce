import './checkoutitem.scss';

const CheckoutItem = ({cartItem}) =>
{
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkoutItemContainer'>
            <div className='imageContainer'>
                <img src={ imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{ name }</span>
            <span className='quantity'>{ quantity }</span>
            <span className='price'>{ price }</span>
            <div className='removeButton'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem