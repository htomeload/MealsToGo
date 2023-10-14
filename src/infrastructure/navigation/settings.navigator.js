import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { routeKey, routeName } from '../../constants/app.constants';
import SettingsScreen from '../../features/settings/screens/settings.screen';
import FavoritesScreen from '../../features/favorites/screen/favorites.screen';

const SettingsStack = createStackNavigator();

const defaultScreenOptions = {
    headerShown: true,
    ...TransitionPresets?.SlideFromRightIOS,
};

export default function SettingsNavigator() {
    return (
        <SettingsStack.Navigator screenOptions={defaultScreenOptions}>
            <SettingsStack.Screen
                name={routeName.settings}
                navigationKey={routeKey.settings}
                component={SettingsScreen}
            />
            <SettingsStack.Screen
                name={routeName.favorites}
                navigationKey={routeKey.favorites}
                component={FavoritesScreen}
            />
        </SettingsStack.Navigator>
    );
}
