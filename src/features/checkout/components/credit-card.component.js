import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import { cardTokenRequest } from '../../../services/checkout/checkout.service';

export default function CreditCardInput({ name, callback, onError }) {
    const handleCallbackAfterOnChange = (card, token, isComplete) => {
        callback?.({ card, token, isComplete });
    };

    const handleOnError = (error) => {
        onError?.(error?.toString());
    };

    const onChange = async (formData) => {
        const { values, status } = formData;
        const isIncomplete = Object.values(status).includes('incomplete');
        if (!isIncomplete) {
            const splitExpiry = values?.expiry?.split('/');
            const card = {
                number: values?.number,
                exp_month: splitExpiry?.[0],
                exp_year: splitExpiry?.[1],
                cvc: values?.cvc,
                name: name,
            };

            const result = await cardTokenRequest(card);

            if (result?.id) {
                handleCallbackAfterOnChange(card, result, true);
            } else {
                handleOnError(result);
            }
        } else {
            handleCallbackAfterOnChange(null, null, false);
        }
    };
    return <LiteCreditCardInput onChange={onChange} />;
}
