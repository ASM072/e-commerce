
import { CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { BUTTONTYPE } from '../buttons/button';

import
{
    PaymentFormContainer,
    FormContainer,
    PaymentButton,
} from './paymentformstyle';

const PaymentForm = () =>
{
    const stripe = useStripe();
    const elements = useElements();
    //const amount = useSelector( selectCartTotal );
    //const currentUser = useSelector( selectCurrentUser );
    //const [ isProcessingPayment, setIsProcessingPayment ] = useState( false );

    const paymentHandler = async ( e ) =>
    {
        e.preventDefault();
        if ( !stripe || !elements )
        {
            return;
        }
        //setIsProcessingPayment( true );
        const response = await fetch( '/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( { amount:  100 } ),
        } ).then( ( res ) =>
        {
            return res.json();
        } );

        const clientSecret = response.paymentIntent.client_secret;

        const paymentResult = await stripe.confirmCardPayment( clientSecret, {
            payment_method: {
                card: elements.getElement( CardElement ),
                billing_details: {
                    name: 'Ahmed Saad'
                    //name: currentUser ? currentUser.displayName : 'Saad Malik',
                },
            },
        } );

        //setIsProcessingPayment( false );

        if ( paymentResult.error )
        {
            alert( paymentResult.error.message );
        } else
        {
            if ( paymentResult.paymentIntent.status === 'succeeded' )
            {
                alert( 'Payment Successful!' );
            }
        }
    };

    return (
        <PaymentFormContainer>
            <FormContainer >
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <PaymentButton
                    buttonType={ BUTTONTYPE.inverted }
                    //isLoading={ isProcessingPayment }
                >
                    Pay Now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    );
};
export default PaymentForm;