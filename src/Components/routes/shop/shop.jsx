import CategoriesPreview from '../categoriespreview/categoriespreview';
import './shop.scss';
import { Routes, Route } from 'react-router-dom';
import Category from '../category/category';
import Footer from '../../footer/footer';

const Shop = () =>
{
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