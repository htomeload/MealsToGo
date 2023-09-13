import React from 'react';
import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import SaferAreaView from './src/components/safer-area-view/SaferAreaView';
import styled from 'styled-components/native';

const SaferAreaViewStyled = styled(SaferAreaView)`
    flex: 1;
`;

export default function App() {
    return (
        <SaferAreaViewStyled>
            <RestaurantsScreen />
        </SaferAreaViewStyled>
    );
}
