import './category.scss' 
import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import ProductCard from '../../productcard/productcard';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../../store/category/category-selector';

const Category = () =>
{
    const { category } = useParams();
    const categoryMap = useSelector( selectCategoriesMap );
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