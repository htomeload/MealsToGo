import React from 'react';
import { CartIcon, CartIconContainer, ViewFullScreen } from '../components/checkout.styled';
import Text from '../../../components/typography/text.components';
import { colors } from '../../../infrastructure/theme/colors';

export default function CheckOutErrorScreen({ navigation, route }) {
    const { error = '' } = route?.params;

    return (
        <ViewFullScreen>
            <CartIconContainer>
                <CartIcon icon={'close'} bg={colors.ui.error} />
                <Text variant="label">{error}</Text>
            </CartIconContainer>
        </ViewFullScreen>
    );
}
