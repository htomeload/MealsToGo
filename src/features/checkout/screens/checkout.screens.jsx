import React, { useContext } from 'react';
import {
    CartIcon,
    CartIconContainer,
    CheckOutFormContainer,
    ViewFullScreen,
} from '../components/checkout.styled';
import Text from '../../../components/typography/text.components';
import CreditCardInput from '../components/credit-card.component';
import { CartContext } from '../../../services/cart/cart.context';
import RestaurantInfoCard from '../../../components/restaurant-info-card/restaurant-info-card.components';
import { List } from 'react-native-paper';

export default function CheckoutScreen({ navigation }) {
    const { cart, restaurant, total } = useContext(CartContext);

    if (!cart?.length || !restaurant) {
        return (
            <ViewFullScreen>
                <CartIconContainer>
                    <CartIcon />
                    <Text>Your cart is empty!</Text>
                </CartIconContainer>
            </ViewFullScreen>
        );
    }

    return (
        <ViewFullScreen>
            <RestaurantInfoCard restaurant={restaurant} />
            <CheckOutFormContainer>
                <Text>Your Order</Text>
                <List.Section>
                    {cart?.map(({ item, price }, index) => (
                        <List.Item title={`${item} - ${price / 100}`} />
                    ))}
                </List.Section>
                <Text>Total: {total / 100}</Text>
                <CreditCardInput />
            </CheckOutFormContainer>
        </ViewFullScreen>
    );
}
