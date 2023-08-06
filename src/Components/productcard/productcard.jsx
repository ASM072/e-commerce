import '../productcard/productcard.scss';
import Button from '../buttons/button';

const ProductCard = ({product}) =>
{
    const { name, price, imageUrl } = product;
    return (<div className='productCardContainer'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className='footer'>
            <span className='name'></span>
            <span className='price'></span>
        </div>
        <Button buttonType='inverted'>Add To Cart</Button>
    </div>)
}

export default ProductCard;