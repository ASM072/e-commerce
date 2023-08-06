import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping.svg";
import './carticon.scss';

const CartIcon = () =>
{
    return (
        <div className="cartIconContainer">
            <ShoppingCartIcon className="shoppingIcon"></ShoppingCartIcon>
            <span className="itemCount"></span>
        </div>
    )
}

export default CartIcon;