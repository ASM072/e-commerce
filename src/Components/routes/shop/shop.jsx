import { useContext } from "react"
import { ProductContext } from "../../../context/product"
import ProductCard from "../../productcard/productcard";
import './shop.scss';

const Shop = () =>
{
    const { products } = useContext( ProductContext );
    return(
        <div className="productsContainer">
            { products.map( (  product ) => (
                <ProductCard key={ product.id } product={ product } />            ))}
        </div>
    )
}
export default Shop