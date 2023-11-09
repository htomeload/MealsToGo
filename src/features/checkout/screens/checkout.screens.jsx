import React, { useContext, useState } from 'react';
import {
    CartIcon,
    CartIconContainer,
    CheckOutFormContainer,
    ClearButton,
    NameInput,
    PayButton,
    PaymentProcessing,
    ViewFullScreen,
} from '../components/checkout.styled';
import Text from '../../../components/typography/text.components';
import CreditCardInput from '../components/credit-card.component';
import { CartContext } from '../../../services/cart/cart.context';
import RestaurantInfoCard from '../../../components/restaurant-info-card/restaurant-info-card.components';
import { List } from 'react-native-paper';
import Spacer from '../../../components/spacer/Spacer.components';
import { payRequest } from '../../../services/checkout/checkout.service';

export default function CheckoutScreen({ navigation }) {
    const { cart, restaurant, total, clearCart } = useContext(CartContext);

    const [name, setName] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [token, setToken] = useState('');
    const [card, setCard] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnPressPayButton = async () => {
        setIsLoading(true);

        const result = await payRequest(token, total / 100, name);

        if (result) {
            setIsLoading(false);
            handleOnPressClearCartButton();
        } else {
            setIsLoading(false);
        }
    };

    const handleOnPressClearCartButton = async () => {
        clearCart?.();
        setName('');
        setToken('');
        setIsCompleted(false);
    };

    const handleOnCreditCardChange = async (info) => {
        if (info?.isComplete) {
            setIsCompleted(true);
            setToken(info?.token?.id);
            setCard(info?.card);
        } else {
            setIsCompleted(false);
            setToken('');
            setCard(null);
        }
    };

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
            {isLoading && <PaymentProcessing />}
            <RestaurantInfoCard restaurant={restaurant} />
            <CheckOutFormContainer>
                <Text>Your Order</Text>
                <List.Section>
                    {cart?.map(({ item, price }, index) => (
                        <List.Item
                            key={`${item}-${price}-${index}`}
                            title={`${item} - ${price / 100}`}
                        />
                    ))}
                </List.Section>
                <Text>Total: {total / 100}</Text>
                <NameInput label={'Name'} value={name} onChangeText={(text) => setName(text)} />
                <Spacer position={'top'} scale={'medium'}>
                    {name?.length > 0 && (
                        <CreditCardInput name={name} callback={handleOnCreditCardChange} />
                    )}
                </Spacer>
                <Spacer position={'bottom'} scale={'xl'}>
                    <PayButton
                        disabled={isLoading || !isCompleted}
                        onPress={handleOnPressPayButton}
                    >
                        Pay now
                    </PayButton>
                    <ClearButton disabled={isLoading} onPress={handleOnPressClearCartButton}>
                        Clear Cart
                    </ClearButton>
                </Spacer>
            </CheckOutFormContainer>
        </ViewFullScreen>
    );
}
