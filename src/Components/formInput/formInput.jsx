import { FormInputLabel, Input, Form } from  './formInputstyle.jsx'

const FormInput = ( { label, ...otherProps } ) =>
{
    return (
        <Form>
            { label && (
                <FormInputLabel shrink={ otherProps.value.length }>
                    {label}
                </FormInputLabel>
            )}
            <Input { ...otherProps } />
        </Form>
    )
};

export default FormInput;