import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../../assets/logo1.svg";
import './navigation.style.scss'
import UserContext from "../../../context/user";
import { userSignOut } from "../../../utility/firebase/firebase.utility";

const Navigation = () =>
{
    const { currentUser } = useContext( UserContext );

    return ( 
        <Fragment>
            <div className="navigation">
                <Link className="logoBox" to="/">
                    <Logo />
                </Link>
                <div className="signIN">
                    {
                        currentUser ? (
                            <span className="signOut-link" onClick={userSignOut}>Sign Out</span>
                            ) : (<Link className="signIn-link" to="/authentication">
                                Sign In
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
