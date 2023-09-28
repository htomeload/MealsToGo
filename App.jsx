import React from 'react';
import SaferAreaView from './src/components/safer-area-view/SaferAreaView';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

import { useFonts as useOswaldFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLatoFonts, Lato_400Regular } from '@expo-google-fonts/lato';

import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/location/location.context';
import Navigation from './src/infrastructure/navigation';
import { FavoritesContextProvider } from './src/services/favorites/favorites.context';

const SaferAreaViewStyled = styled(SaferAreaView)`
    flex: 1;
`;

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
                <FavoritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantContextProvider>
                            <Navigation />
                        </RestaurantContextProvider>
                    </LocationContextProvider>
                </FavoritesContextProvider>
            </ThemeProvider>
        </SaferAreaViewStyled>
    );
}
