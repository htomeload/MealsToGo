import React, { useContext, useEffect } from 'react';
import AppNavigator from './app.navigator';
import { AuthenticationContext } from '../../services/authentication/authentication.context';
import { NavigationContainer } from '@react-navigation/native';
import AccountsNavigator from './account.navigator';

import { initializeApp } from 'firebase/app';
import { firebaseConfigs } from '../../constants/firebase.constants';

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfigs.initializeAppConfigs, firebaseConfigs.appName);

export default function Navigation() {
    const { isAuthenticated, setApp } = useContext(AuthenticationContext);

    useEffect(() => {
        if (firebaseApp) {
            setApp(firebaseApp);
        }
    }, []);

    return (
        <NavigationContainer>
            {!isAuthenticated ? <AccountsNavigator /> : <AppNavigator />}
        </NavigationContainer>
    );
}
