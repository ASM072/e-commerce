import{ShoppingIcon, CartIconContainer, ItemCount} from './carticonstyle.jsx';
import { useContext } from "react";
import  { CartContext } from "../../context/cartcontext";


const CartIcon = () =>
{
    const { openCart, setOpenCart, cartCount } = useContext( CartContext );
    const { showResults, setShowResults } = useContext( CartContext ); // Add this line

    const toggleOpenCart = () =>
    {
        setOpenCart( !openCart );
        setShowResults( false ); // Close the search results when opening the cart
    };

    return (
        <CartIconContainer onClick={ toggleOpenCart }>
            <ShoppingIcon className="shoppingIcon"></ShoppingIcon>
            <ItemCount className="itemCount">{ cartCount }</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;