import React from 'react';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import SaferAreaView from './src/components/safer-area-view/SaferAreaView';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { useFonts as useOswaldFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLatoFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { routeName, tabActiveIcons, tabInactiveIcons } from './src/constants/app.constants';
import { colors } from './src/infrastructure/theme/colors';

const SaferAreaViewStyled = styled(SaferAreaView)`
    flex: 1;
`;

function MapScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Map!</Text>
        </View>
    );
}

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
});

function AppTabs() {
    return (
        <Tab.Navigator initialRouteName="Restaurants" screenOptions={createScreenOptions}>
            <Tab.Screen name={routeName.restaurants} component={RestaurantsScreen} />
            <Tab.Screen name={routeName.map} component={MapScreen} />
            <Tab.Screen name={routeName.settings} component={SettingsScreen} />
        </Tab.Navigator>
    );
}

export default function App() {
    const [oswaldLoaded] = useOswaldFonts({
        Oswald_400Regular,
    });

    const [latoLoaded] = useLatoFonts({
        Lato_400Regular,
    });

    if (!oswaldLoaded || !latoLoaded) return null;

    return (
        <SaferAreaViewStyled>
            <ThemeProvider theme={theme}>
                <NavigationContainer>
                    <AppTabs />
                </NavigationContainer>
            </ThemeProvider>
        </SaferAreaViewStyled>
    );
}
