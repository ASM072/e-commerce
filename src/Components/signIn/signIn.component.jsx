// eslint-disable-next-line
import { signInWithGooglePopup, userDocFromAuth } from "../../utility/firebase/firebase.utility";  
import { userSignIn, signInWithEmailandPassword } from "../../utility/firebase/firebase.utility";
import { useState } from "react"; eve
import FormInput from "../formInput/formInput";
import Button from "../buttons/button";


const defaultInputField = {
    email: "",
    password: "",
};

const SignIn = () =>
{
    const [ inputFields, setInputField ] = useState( defaultInputField );
    const { email, password } = inputFields;

    const handleChange = ( event ) =>
    {
        const { name, value } = event.target;
        setInputField( { ...inputFields, [ name ]: value } );
    }

    const resetInputFields = () =>
    {
        setInputField( defaultInputField );
    };

    const signInHandler = async ( event ) =>
    {
        event.preventDefault();
        try
        {
            const { user } = await userSignIn( email, password );
            resetInputFields();
            alert( "Success!" );
        } catch ( error )
        {
            alert( "Unable to Sign In" + error );
        }
    }
    const logGoogleUser = async () =>
    {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await userDocFromAuth( user );
    };

    return (
        <div className="ob">
            {/* <SignUp/> */}
            <h2>Already have an account? Sign In</h2>

            <form onSubmit={signInHandler}>
                    
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={ email }/>
                
                <FormInput
                    type="password"
                    label="Password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={ password }/>

                <div className="buttons-container">
                    <Button type="submit">SIGN IN</Button>
                    <Button buttonType='google' onClick={signInWithGooglePopup}>GOOGLE SIGN IN</Button>
                </div>
            </form>
        </div>


    );
};

export default SignIn;