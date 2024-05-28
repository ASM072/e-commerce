import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../../assets/logo1.svg";
import { NavigationContainer, NavigationLinkContainer, NavLink, LogoContainer, SearchBarContainer } from './navigation.style.jsx'
import { userSignOut } from "../../../utility/firebase/firebase.utility";
import CartIcon from '../../carticon/carticon';
import Cart from "../../cart/cart";
import { CartContext } from "../../../context/cartcontext";
import SearchBar from "../../searchbar/searchbar";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user-selector.js";


const Navigation = () =>
{
    const currentUser = useSelector( selectCurrentUser );
    const { openCart } = useContext( CartContext );

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <Logo className="logo"/>
                </LogoContainer>
                <SearchBarContainer>
                <SearchBar/>
                </SearchBarContainer>
                <NavigationLinkContainer>
                    <NavLink to="/aboutus"> About Us</NavLink>
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
