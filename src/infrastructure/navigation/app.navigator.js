import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { tabRouteName, tabActiveIcons, tabInactiveIcons } from '../../constants/app.constants';
import { colors } from '../theme/colors';
import Text from '../../components/typography/text.components';
import RestaurantsNavigator from './restaurants.navigator';
import MapScreen from '../../features/map/screens/map.screen';

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

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
            <Tab.Screen name={tabRouteName.mapTab} component={MapScreen} />
            <Tab.Screen name={tabRouteName.settingsTab} component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <AppTabs />
        </NavigationContainer>
    );
}
