import './category.scss' 
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { ProductContext } from '../../../context/product';
import ProductCard from '../../productcard/productcard';

const Category = () =>
{
    const { category } = useParams();
    const { categoryMap } = useContext( ProductContext );
    const [ products, setProducts ] = useState( categoryMap[category] );

    useEffect( () =>
    {
        setProducts( categoryMap[ category ] );
    }, [ category, categoryMap ] )
    
    return (
        <Fragment>
            <h2 className='categoryTitle'>{ category.toUpperCase() }</h2>
        <div className='categoryContainer'>
            { products && products.map( ( product ) => <ProductCard key={ product.id } product={ product } /> ) }
            </div>
            
        </Fragment>
    )

}

export default Category;