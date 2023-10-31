import React from 'react';
import { ViewFullScreen } from '../components/checkout.styled';
import Text from '../../../components/typography/text.components';
import CreditCardInput from '../components/credit-card.component';

export default function CheckoutScreen({ navigation }) {
    return (
        <ViewFullScreen>
            <Text>Checkout Screen</Text>
            <CreditCardInput />
        </ViewFullScreen>
    );
}
