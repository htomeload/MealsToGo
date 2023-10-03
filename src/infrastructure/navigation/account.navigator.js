import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { routeKey, routeName } from '../../constants/app.constants';
import AccountScreen from '../../features/account/screens/account.screen';

const AccountStack = createStackNavigator();

const defaultScreenOptions = {
    headerShown: false,
    ...TransitionPresets?.ModalPresentationIOS,
};

export default function AccountsNavigator() {
    return (
        <AccountStack.Navigator screenOptions={defaultScreenOptions}>
            <AccountStack.Screen
                name={routeName.login}
                navigationKey={routeKey.login}
                component={AccountScreen}
            />
        </AccountStack.Navigator>
    );
}
