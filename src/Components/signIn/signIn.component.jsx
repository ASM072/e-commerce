// eslint-disable-next-line
import { auth, signInWithGooglePopup, userDocFromAuth } from "../../utility/firebase/firebase.utility";  
import { authUserWithEmailAndPassword, userSignIn } from "../../utility/firebase/firebase.utility";
import { useState } from "react";
import FormInput from "../formInput/formInput";
import SignUp from "../signUp/SignUp";

const SignIn = () =>
{
    const defaultInputField = {
        email: "",
        password: "",
    };

    const [ inputFields, setInputField ] = useState( defaultInputField );
    const { email, password } = inputFields;
    console.log( inputFields );

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
            console.log( user );
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
            <SignUp/>
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
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>


    );
};

export default SignIn;