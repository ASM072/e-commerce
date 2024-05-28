import Button, { BUTTONTYPE } from '../buttons/button';
import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext';
import { ProductCardContainer } from './productcardstyle.jsx';

const ProductCard = ({product}) =>
{
    const { addItemToCart } = useContext( CartContext );
    const { name, price, imageUrl } = product;
    const addProductsToCart = () => addItemToCart(product);
    return (
        <ProductCardContainer className='productCardContainer'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className='footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>
            <Button buttonType={ BUTTONTYPE.inverted} onClick={addProductsToCart} >Add To Cart</Button>
    </ProductCardContainer>)
}

export default ProductCard;