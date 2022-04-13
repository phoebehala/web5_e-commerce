import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

//import brandLogo from '/myLogo.png'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100  // convert price to cents
    const publishableKey = process.env.REACT_APP_STRIPE_KEY

    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Hala'
            //image={brandLogo}
            description={`Your total price is $${price}`}
            //billingAddress
            //shippingAddress
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        ><button>btn</button>
            
        </StripeCheckout>
    )
}

export default StripeCheckoutButton