import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { routeKey, routeName } from '../../constants/app.constants';
import AccountScreen from '../../features/account/screens/account.screen';
import RegisterScreen from '../../features/account/screens/register.screen';
import LoginScreen from '../../features/account/screens/login.screen';

const AccountStack = createStackNavigator();

const defaultScreenOptions = {
    headerShown: false,
    ...TransitionPresets?.SlideFromRightIOS,
};

export default function AccountsNavigator() {
    return (
        <AccountStack.Navigator screenOptions={defaultScreenOptions}>
            <AccountStack.Screen
                name={routeName.account}
                navigationKey={routeKey.account}
                component={AccountScreen}
            />
            <AccountStack.Screen
                name={routeName.register}
                navigationKey={routeKey.register}
                component={RegisterScreen}
            />
            <AccountStack.Screen
                name={routeName.login}
                navigationKey={routeKey.login}
                component={LoginScreen}
            />
        </AccountStack.Navigator>
    );
}
