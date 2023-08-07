import { Fragment, useContext } from "react"
import { ProductContext } from "../../../context/product"
import './categoriespreview.scss';
import CategoryPreviews from "../../categorypreview/categorypreviews";

const CategoriesPreview = () =>
{
    const { categoryMap } = useContext( ProductContext );
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