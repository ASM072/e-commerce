import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../../assets/logo1.svg";
import './navigation.style.scss'
import { UserContext } from "../../../context/user";
import { userSignOut } from "../../../utility/firebase/firebase.utility";
import CartIcon from '../../carticon/carticon';
import Cart from "../../cart/cart";
import { CartContext } from "../../../context/cartcontext";

const Navigation = () =>
{
    const { currentUser } = useContext( UserContext );
    const { openCart } = useContext( CartContext );

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logoBox" to="/">
                    <Logo className="logo"/>
                </Link>

                <div className="navigationlinkContainer">
                    <Link className="navigationlinks" to="/shop">SHOP</Link>
                    {
                        currentUser ? (
                            <span className="navigationlinks" onClick={ userSignOut }>Sign Out</span>
                        ) : ( <Link className="navigationlinks" to="/authentication">
                            SIGN IN
                        </Link>
                        )
                    }
                    <CartIcon/>
                </div>
             {openCart && <Cart/>}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
