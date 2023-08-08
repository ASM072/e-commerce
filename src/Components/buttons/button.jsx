import { BaseButton, GoogleSignInButton, InvertedButton } from './buttonstyle';

export const BUTTONTYPE = {
    base: 'base',
    google: 'googleSignIn',
    inverted: 'inverted'
};

const getButton = ( buttonType = BUTTONTYPE.base ) => (
    {
        [ BUTTONTYPE.base ]: BaseButton,
        [ BUTTONTYPE.google ]: GoogleSignInButton,
        [ BUTTONTYPE.inverted ]: InvertedButton,
    }[buttonType]
)

const Button = ( { children, buttonType, ...otherProps } ) =>
{
    const CustomButton=getButton(buttonType)
    return (
        <CustomButton {...otherProps}>
            {children}
      </CustomButton>
        
    );
}
export default Button;