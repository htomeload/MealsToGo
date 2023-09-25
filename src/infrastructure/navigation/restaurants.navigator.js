import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { routeKey, routeName } from '../../constants/app.constants';
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';
import RestaurantDetailScreen from '../../features/restaurant_detail/restaurant_detail.screen';

const RestaurantStack = createStackNavigator();

const defaultScreenOptions = {
    headerShown: false,
    ...TransitionPresets?.ModalPresentationIOS,
};

export default function RestaurantsNavigator() {
    return (
        <RestaurantStack.Navigator screenOptions={defaultScreenOptions}>
            <RestaurantStack.Screen
                name={routeName.restaurants}
                navigationKey={routeKey.restaurants}
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name={routeName.restaurantDetail}
                navigationKey={routeKey.restaurantDetail}
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
}
