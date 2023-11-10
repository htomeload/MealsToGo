import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { routeKey, routeName } from '../../constants/app.constants';
import CheckoutScreen from '../../features/checkout/screens/checkout.screens';
import CheckOutSuccessScreen from '../../features/checkout/screens/checkout-success.screen';
import CheckOutErrorScreen from '../../features/checkout/screens/checkout-error.screens';

const CheckOutStack = createStackNavigator();

const defaultScreenOptions = {
    headerShown: false,
    ...TransitionPresets?.SlideFromRightIOS,
};

export default function CheckOutsNavigator() {
    return (
        <CheckOutStack.Navigator screenOptions={defaultScreenOptions}>
            <CheckOutStack.Screen
                name={routeName.checkOut}
                navigationKey={routeKey.checkOut}
                component={CheckoutScreen}
            />
            <CheckOutStack.Screen
                name={routeName.checkOutSuccess}
                navigationKey={routeKey.checkOutSuccess}
                component={CheckOutSuccessScreen}
            />
            <CheckOutStack.Screen
                name={routeName.checkOutError}
                navigationKey={routeKey.checkOutError}
                component={CheckOutErrorScreen}
            />
        </CheckOutStack.Navigator>
    );
}
