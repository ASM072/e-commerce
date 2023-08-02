import './formInput.scss'

const FormInput = ( { label, ...otherProps } ) =>
{
    return (
        <div className="Form">
            { label && (
                <label className={ `${
                    otherProps.value.length ?'shrink':''
                    }formInputLabel` }>
                    {label}
                </label>
            )}
            <input className="'formInput" { ...otherProps } />
        </div>
    )
};

export default FormInput;