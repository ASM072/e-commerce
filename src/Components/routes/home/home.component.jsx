import { Outlet } from "react-router-dom";
import Directory from "../../directory/directory.component";
import Footer from "../../footer/footer";



const Home = () =>
{
    
    return (
        <div>
            <Directory />
            <Outlet />
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Home