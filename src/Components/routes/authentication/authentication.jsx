
import SignUp from "../../signUp/SignUp";
import Signin from "../../signIn/signIn.component";
import './authentication.scss';

const Authentication = () =>
{
    return (
        <div className="authenticationContainer">
            <Signin />
            <SignUp />
        </div>
    );
};

export default Authentication;
