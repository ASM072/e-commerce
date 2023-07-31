import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Components/routes/home/home.component";
import { Fragment } from "react";
import { ReactComponent as Logo} from "./assets/logo.svg";

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

const App = () =>
{
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
    
)
};
export default App;