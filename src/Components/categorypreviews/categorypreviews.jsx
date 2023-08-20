import './categorypreviews.scss';
import ProductCard from '../productcard/productcard';
import { Link } from 'react-router-dom';

const CategoryPreviews = ({title, products}) =>
{
    return (<div className='categoryPreviewContainer'>
        <h2>
        <Link className='title' to={title}>
            { title.toUpperCase() }
         </Link>
        </h2>
        <div className='preview'>
            {
                products
                    .filter((_, idx )=>idx<4)
                    .map( ( product ) => (
                        <ProductCard key={ product.id } product={ product } />
                ))
            }
        </div>
    </div>)
}

export default CategoryPreviews;