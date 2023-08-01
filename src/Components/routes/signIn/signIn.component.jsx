// eslint-disable-next-line
import { signInWithGooglePopup, userDocFromAuth } from "../../../utility/firebase/firebase.utility";

const SignIn = () =>
{
    const logGoogleUser = async () =>
    {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await userDocFromAuth( user );
    };

    return (
        <div>
            <button onClick={ logGoogleUser }>Sign in</button>
        </div>
    );
};

export default SignIn;