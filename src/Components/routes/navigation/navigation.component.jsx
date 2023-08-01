import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../../assets/logo1.svg";
import './navigation.style.scss'

const Navigation = () =>
{
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logoBox" to="/">
                    
                    <Logo />
                </Link>
                <div className="signIN">
                <Link className="signIn-link" to="/signIn">
                    Sign In   
                </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;
