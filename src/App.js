import { Routes, Route } from "react-router-dom";
import Home from "./Components/routes/home/home.component";
import Navigation from "./Components/routes/navigation/navigation.component";
import Authentication from "./Components/routes/authentication/authentication";

const App = () =>
{
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={<Home/>}/>
        <Route path="authentication" element={ <Authentication /> } />
      </Route>
    </Routes>
    
)
};
export default App;