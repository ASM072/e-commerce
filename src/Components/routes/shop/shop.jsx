import CategoriesPreview from '../categoriespreview/categoriespreview';
import './shop.scss';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/category';
import Footer from '../../footer/footer';
import { useEffect } from 'react';
import { getCategories } from '../../../utility/firebase/firebase.utility';
import { useDispatch } from 'react-redux';
import { setCategories } from '../../../store/category/category-action';



const Shop = () =>
{
    const dispatch = useDispatch();
    useEffect( () =>
    {
        const getCategoriesMap = async () =>
        {
            const catergoriesArray = await getCategories('categories');
            dispatch( setCategories( catergoriesArray ) );
        };
        getCategoriesMap();
    }, [(dispatch)] )
    return (
        <div>
        <Routes>
            <Route index element={ <CategoriesPreview/> } />
            <Route path=':category' element={ <Category/> } />
            </Routes>
            <Footer/>
        </div>
    )
}
export default Shop