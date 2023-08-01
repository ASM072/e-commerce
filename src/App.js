import { Routes, Route } from "react-router-dom";
import Home from "./Components/routes/home/home.component";
import Navigation from "./Components/routes/navigation/navigation.component";
import SignIn from "./Components/routes/signIn/signIn.component";

const App = () =>
{
  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={<Home/>}/>
        <Route path="signIn" element={<SignIn/>}/>
      </Route>
    </Routes>
    
)
};
export default App;