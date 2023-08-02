import FormInput from "../formInput/formInput";
import { useState } from "react";




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

    return (
        <div className="sigUpContainer">
            <h2>Don't have an account</h2>
            <span>SIGN UP USING EMAIL AND PASSWORD</span>

            <form onSubmit={ submitHandler }>
                <FormInput
                    label="Name"
                    type="text"
                    required
                    name="displayName"
                    onChange={ changeHandler }
                    value={ displayName }
                />
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={ changeHandler }
                    name="email"
                    value={ email }
                />
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={ changeHandler }
                    name="password"
                    value={ password }
                />
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={ changeHandler }
                    name="confirmPassword"
                    value={ confirmPassword }
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};