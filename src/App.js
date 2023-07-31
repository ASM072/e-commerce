import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Components/routes/home/home.component";
import { Fragment } from "react";

const Navigation = () =>
{
  return (
    <Fragment>
    <div className="navigation">
      <Link className="logo"></Link>
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