// import createStripe from "stripe-client";
import { makeid } from '../../utils/utils';

// const stripe = createStripe(PUBLISHABLE_KEY);

export const cardTokenRequest = async (card) => {
    try {
        /*
        const info = await stripe.createToken({ card });
        
        if (info) {
            return info;
        } else {
            return null;
        }
        */
        const _mockStripeResponse = {
            client_ip: '10.0.0.4',
            created: Date.now(),
            id: `tok_${makeid(24)}`,
            livemode: false,
            object: 'token',
        };

        return _mockStripeResponse;
    } catch (error) {
        console.log(error);
        return null;
    }
};
