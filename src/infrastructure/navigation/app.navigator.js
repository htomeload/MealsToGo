import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { tabRouteName, tabActiveIcons, tabInactiveIcons } from '../../constants/app.constants';
import { colors } from '../theme/colors';
import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';
import { FavoritesContextProvider } from '../../services/favorites/favorites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantContextProvider } from '../../services/restaurants/restaurants.context';
import SettingsNavigator from './settings.navigator';
import { CartContextProvider } from '../../services/cart/cart.context';
import CheckOutsNavigator from './checkout.navigator';

const Tab = createBottomTabNavigator();

const tabBarIcon = ({ focused, color, size, route }) => (
    <Ionicons
        name={focused ? tabActiveIcons?.[route?.name] : tabInactiveIcons?.[route?.name]}
        size={24}
        color={focused ? colors.text.error : colors.text.secondary}
    />
);

const createScreenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => tabBarIcon({ focused, color, size, route }),
    tabBarActiveTintColor: colors.text.error,
    tabBarInactiveTintColor: colors.text.secondary,
    headerShown: false,
});

function AppTabs() {
    return (
        <Tab.Navigator initialRouteName="Restaurants" screenOptions={createScreenOptions}>
            <Tab.Screen name={tabRouteName.restaurantsTab} component={RestaurantsNavigator} />
            <Tab.Screen name={tabRouteName.checkOut} component={CheckOutsNavigator} />
            <Tab.Screen name={tabRouteName.mapTab} component={MapScreen} />
            <Tab.Screen name={tabRouteName.settingsTab} component={SettingsNavigator} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <FavoritesContextProvider>
            <LocationContextProvider>
                <RestaurantContextProvider>
                    <CartContextProvider>
                        <AppTabs />
                    </CartContextProvider>
                </RestaurantContextProvider>
            </LocationContextProvider>
        </FavoritesContextProvider>
    );
}
