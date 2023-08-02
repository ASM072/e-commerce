
import SignUp from "../../signUp/SignUp";
import SignIn from "../../signIn/signIn.component";
import './authentication.scss';

const Authentication = () =>
{
    return ( 
        <div className="authenticationContainer">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Authentication;
