import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
z


const Navigation = () =>
{
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logoBox" to="/">
                    <Logo className="logo" />
                </Link>
            </div>
            <Outlet />
        </Fragment>
    )
}
