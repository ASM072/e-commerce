const ButtonType = {
    google: 'googleSignIm',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) =>
{
    return (
        <button className={`buttonContainer ${ButtonType[buttonType]}`}>
            {children}
      </button>
        
    );
}
export default Button;