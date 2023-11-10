import React from 'react';
import { CartIcon, CartIconContainer, ViewFullScreen } from '../components/checkout.styled';
import Text from '../../../components/typography/text.components';

export default function CheckOutSuccessScreen({ navigation }) {
    return (
        <ViewFullScreen>
            <CartIconContainer>
                <CartIcon icon={'check-bold'} />
                <Text variant="label">Success!</Text>
            </CartIconContainer>
        </ViewFullScreen>
    );
}
