const FormInput = ( { label, ...otherProps } ) =>
{
    return (
        <div>
            <label>
            </label>
            <input { ...otherProps } />
        </div>
    )
};

export default FormInput;