import './button.scss';

export const BUTTONTYPE = {
    google: 'googleSignIn',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) =>
{
    return (
        <button className={ `buttonContainer ${ BUTTONTYPE[buttonType]}`}>
            {children}
      </button>
        
    );
}
export default Button;