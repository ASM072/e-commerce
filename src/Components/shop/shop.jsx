import { useContext } from "react"
import { ProductContext } from "../../context/product"
import ProductCard from "../productcard/productcard";


const Shop = () =>
{
    const { products } = useContext( ProductContext );
    return (
        <div>
            { products.map( ( { id, name }) => (
                <ProductCard key={products.id} product={products}/>
            ))}
        </div>
    )
}
export default Shop