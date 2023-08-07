import './categorypreview.scss';
import ProductCard from '../productcard/productcard';

const CategoryPreview = ({title, products}) =>
{
    return (<div className='categoryPreviewContainer'>
        <h2>
        <span className='title'>
            { title.toUpperCase() }
         </span>
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

export default CategoryPreview;