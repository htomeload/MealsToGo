import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.components';

const mockRestaurantInfo = {
    name: 'Default Name',
    icon: '',
    photos: ['https://i.imgur.com/4q0Jo6G.jpg'],
    address: '999/99 Default Address',
    openingHours: '08:00',
    isOpenNow: true,
    rating: 4,
    isClosedTemporary: false,
};

const RestaurantsScreenContainer = styled(View)`
    flex: 1;
`;

const SearchBarContainer = styled(View)`
    padding: ${(props) => props.theme?.space?.[2]};
`;

const RestaurantListContainer = styled(View)`
    flex: 1;
    padding: ${(props) => props.theme?.space?.[3]};
`;

const SearchbarStyled = styled(Searchbar)`
    border-radius: 3px;
`;

export default function RestaurantsScreen() {
    return (
        <RestaurantsScreenContainer>
            <SearchBarContainer>
                <SearchbarStyled />
            </SearchBarContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard restaurant={mockRestaurantInfo} />
            </RestaurantListContainer>
        </RestaurantsScreenContainer>
    );
}
