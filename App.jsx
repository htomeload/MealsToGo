import React from 'react';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import SaferAreaView from './src/components/safer-area-view/SaferAreaView';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

import { useFonts as useOswaldFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLatoFonts, Lato_400Regular } from '@expo-google-fonts/lato';

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
                <RestaurantsScreen />
            </ThemeProvider>
        </SaferAreaViewStyled>
    );
}
