import CategoriesPreview from '../categoriespreview/categoriespreview';
import './shop.scss';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/category';

const Shop = () =>
{
    return (
        <Routes>
            <Route index element={ <CategoriesPreview/> } />
            <Route path=':category' element={ <Category/> } />
        </Routes>
    )
}
export default Shop