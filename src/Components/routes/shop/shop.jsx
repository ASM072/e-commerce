import { useContext } from "react"
import { ProductContext } from "../../../context/product"
import './shop.scss';
import CategoryPreview from "../../categorypreview/categorypreviews";

const Shop = () =>
{
    const { categoryMap } = useContext( ProductContext );
    return (
        <div className="shopContainer"> 
            
            { Object.keys( categoryMap ).map( ( title ) =>
            {
                const products = categoryMap[ title ];
                return <CategoryPreview key={title} title={title} products={products}/>
                }
            ) }
            
        </div>
    )
}
export default Shop