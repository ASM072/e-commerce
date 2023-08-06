import { ReactComponent as ShoppingCartIcon } from "../../assets/shopbag.svg";
import './carticon.scss';
import { useContext } from "react";
import  { CartContext } from "../../context/cartcontext";


const CartIcon = () =>
{
    const { openCart, setOpenCart, cartCount } = useContext( CartContext );
    const toggleOpenCart = () => setOpenCart( !openCart );
    return (
        <div className="cartIconContainer" onClick={toggleOpenCart}>
            <ShoppingCartIcon className="shoppingIcon"></ShoppingCartIcon>
            <span className="itemCount">{ cartCount }</span>
        </div>
    )
}

export default CartIcon;