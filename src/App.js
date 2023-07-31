import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/routes/home/home.component";

const Navigation = () =>
{
  return (
    <div>
      <Outlet/>
    </div>
  )
}

const App = () =>
{
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route path="Home" element={<Home/>}/>
      </Route>
    </Routes>
    
)
};
export default App;