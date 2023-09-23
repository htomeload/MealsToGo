import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { routeKey, routeName } from '../../constants/app.constants';
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

const defaultScreenOptions = {
    headerShown: false,
};

export default function RestaurantsNavigator() {
    return (
        <RestaurantStack.Navigator screenOptions={defaultScreenOptions}>
            <RestaurantStack.Screen
                name={routeName.restaurants}
                navigationKey={routeKey.restaurants}
                component={RestaurantsScreen}
            />
        </RestaurantStack.Navigator>
    );
}
