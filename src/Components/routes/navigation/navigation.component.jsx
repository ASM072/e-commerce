import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../../assets/logo1.svg";
import { NavigationContainer, NavigationLinkContainer, NavLink, LogoContainer } from './navigation.style.jsx'
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
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo"/>
                </LogoContainer>

                <NavigationLinkContainer>
                    <NavLink to="/shop">SHOP</NavLink>
                    {
                        currentUser ? (
                            <span  onClick={ userSignOut }>Sign Out</span>
                        ) : ( <NavLink  to="/authentication">
                            SIGN IN
                        </NavLink>
                        )
                    }
                    <CartIcon/>
                </NavigationLinkContainer>
             {openCart && <Cart/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
