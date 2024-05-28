import { Fragment } from "react"
import './categoriespreview.scss';
import CategoryPreviews from "../../categorypreviews/categorypreviews";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/category/category-selector";

const CategoriesPreview = () =>
{
    const categoryMap = useSelector( selectCategoriesMap );

    return (
        <Fragment className="categoriesPreviewContainer">

            { Object.keys( categoryMap ).map( ( title ) =>
            {
                const products = categoryMap[ title ];
                return <CategoryPreviews key={ title } title={ title } products={ products } />
            }
            ) }

        </Fragment>
    )
}
export default CategoriesPreview;