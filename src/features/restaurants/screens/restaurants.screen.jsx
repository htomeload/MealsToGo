import React from 'react';
import styled from 'styled-components/native';
import { View, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfoCard from '../components/restaurant-info-card.components';
import Spacer from '../../../components/spacer/Spacer.components';

const mockRestaurantInfo = {
    name: 'Default Name',
    icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos: ['https://i.imgur.com/4q0Jo6G.jpg'],
    address: '99/999 Default Address',
    openingHours: '08:00',
    isOpenNow: true,
    rating: 4,
    isClosedTemporary: true,
};

const RestaurantsScreenContainer = styled(View)`
    flex: 1;
`;

const SearchBarContainer = styled(View)`
    padding: ${(props) => props.theme?.space?.[2]};
`;

const RestaurantListContainer = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 },
})`
    flex: 1;
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
            <RestaurantListContainer
                data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
                renderItem={() => (
                    <Spacer position={'bottom'} scale={'large'}>
                        <RestaurantInfoCard restaurant={mockRestaurantInfo} />
                    </Spacer>
                )}
                keyExtractor={(item) => item?.name}
            />
        </RestaurantsScreenContainer>
    );
}
