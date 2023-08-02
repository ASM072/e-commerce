// eslint-disable-next-line
import { auth, signInWithGooglePopup, userDocFromAuth } from "../../../utility/firebase/firebase.utility";

import { useState, useSyncExternalStore } from "react";


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

    const logGoogleUser = async () =>
    {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await userDocFromAuth( user );
    };

    return (
        <div className="signIn-container">
            <h2>Already have an account? Sign In</h2>

            <form onSubmit={()=>{}}>
                                
                    <label>Email</label>
                    <input type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={ email }/>
                <label>
                password
                </label>
                    <input type="password"
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