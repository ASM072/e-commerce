import { Routes, Route } from "react-router-dom";
import Home from "./Components/routes/home/home.component";
import Navigation from "./Components/routes/navigation/navigation.component";
import Authentication from "./Components/routes/authentication/authentication";
import Shop from "./Components/routes/shop/shop";
import Checkout from "./Components/routes/checkout/checkout";
import AboutUs from "./Components/aboutus/aboutus";
import { useEffect } from "react";
import { onAuthStateChangedFunc, userDocFromAuth } from "./utility/firebase/firebase.utility";
import { setCurrentUser } from "./store/user/user-action";
import { useDispatch } from "react-redux";

const App = () =>
{
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedFunc((user) => {
      if (user) {
        userDocFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={ <Navigation /> }>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={ <Shop/> } />
        <Route path="authentication" element={ <Authentication /> } />
        <Route path="checkout" element={ <Checkout /> } />
        <Route path="aboutus" element={ <AboutUs /> } />
        {/* <Route path="footer" element={ <Footer /> } /> */}
      </Route>
    </Routes>
    
)
};
export default App;