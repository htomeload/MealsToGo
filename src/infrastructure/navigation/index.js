import React, { useContext } from 'react';
import AppNavigator from './app.navigator';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { View } from 'react-native';
import Text from '../../components/typography/text.components';
import { NavigationContainer } from '@react-navigation/native';
import AccountsNavigator from './account.navigator';

export default function Navigation() {
    const { isAuthenticated } = useContext(AuthenticationContext);

    return (
        <NavigationContainer>
            {!isAuthenticated ? <AccountsNavigator /> : <AppNavigator />}
        </NavigationContainer>
    );
}
