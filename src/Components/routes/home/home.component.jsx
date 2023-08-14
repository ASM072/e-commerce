import { Outlet } from "react-router-dom";
import Directory from "../../directory/directory.component";
import Footer from "../../footer/footer";



const Home = () =>
{
    
    return (
        <div>
            <Directory />
            <Outlet />
            <Footer/>
            <div>
            </div>
        </div>
    );
};

export default Home