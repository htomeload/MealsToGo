// import createStripe from "stripe-client";
import { apiRoutes } from '../../constants/api.constants';
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

export const payRequest = async (token, amount, name) => {
    try {
        const result = await fetch(apiRoutes.pay(), {
            body: JSON.stringify({
                token,
                amount,
                name,
            }),
            method: 'POST',
        });

        if (result.status === 200) {
            return result?.json();
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
};
