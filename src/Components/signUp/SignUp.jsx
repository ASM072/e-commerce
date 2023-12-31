import FormInput from "../formInput/formInput";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, userDocFromAuth } from "../../utility/firebase/firebase.utility";
import './signUp.scss';
import Button from "../buttons/button";

const SignUp = () =>
{
    const defaultInputField = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const [ inputFileds, setInputField ] = useState( defaultInputField );
    const { displayName, email, password, confirmPassword } = inputFileds;
    console.log( inputFileds );

    const resetInputFields = () =>
    {
        setInputField( defaultInputField );
    };

    const changeHandler = ( event ) =>
    {
        const { name, value } = event.target;
        setInputField( { ...inputFileds, [ name ]: value } );
    };

    const submitHandler = async ( event ) =>
    {
        event.preventDefault();
        if ( password !== confirmPassword ){
            alert( "Passwords do not match" );
            return;
        }
        try
        {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            
            await userDocFromAuth( user, { displayName } );
            resetInputFields();
            console.log( user );
        } catch ( error )
        {
            alert( "Error in creating user" + error );
        }
    };

    return (
        <div className="signUpContainer">
            <h2>Don't have an account</h2>
            <span>SIGN UP USING EMAIL AND PASSWORD</span>

            <form onSubmit={ submitHandler }>
                <FormInput
                    label="Name"
                    type="text"
                    required
                    name="displayName"
                    autoComplete='on'
                    onChange={ changeHandler }
                    value={ displayName }
                />
                <FormInput
                    label="Email"
                    type="email"
                    required
                    autoComplete='on'
                    onChange={ changeHandler }
                    name="email"
                    value={ email }
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    autoComplete='on'
                    onChange={ changeHandler }
                    name="password"
                    value={ password }
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    autoComplete='on'
                    onChange={ changeHandler }
                    name="confirmPassword"
                    value={ confirmPassword }
                />
                <Button type="submit">SIGN UP</Button>
            </form>
        </div>
    );
};

export default SignUp;