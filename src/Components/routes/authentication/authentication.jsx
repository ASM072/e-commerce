
import SignUp from "../../signUp/SignUp";
import SignIn from "../../signIn/signIn.component";
import './authentication.scss';
import Footer from '../../footer/footer';

const Authentication = () =>
{
    return ( 
        <div>
        <div className="authenticationContainer">
            <SignIn />
            <SignUp />
            </div>
            <Footer/>
        </div>
    );
};

export default Authentication;
