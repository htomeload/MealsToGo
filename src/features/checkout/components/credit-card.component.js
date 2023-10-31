import React from 'react';
import { LiteCreditCardInput } from 'react-native-credit-card-input';

export default function CreditCardInput() {
    const onChange = (formData) => {
        const { values, status } = formData;
        const isIncomplete = Object.values(status).includes('incomplete');
    };
    return <LiteCreditCardInput onChange={onChange} />;
}
