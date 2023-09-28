import React, { useContext, useState } from 'react';
import RestaurantInfoCard from '../components/restaurant-info-card.components';
import Spacer from '../../../components/spacer/Spacer.components';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { LoadingIndicator } from '../../../components/loading-indicator/LoadingIndicator.components';
import {
    RestaurantListContainer,
    RestaurantsScreenContainer,
    ViewVisibilityStyled,
} from './restaurants.styles';
import Search from '../components/search.component';
import { LocationContext } from '../../../services/location/location.context';
import { TouchableOpacity } from 'react-native';
import { routeName } from '../../../constants/app.constants';
import FavoritesBar from '../../../components/favorites/favorites-bar.component';
import ViewVisibility from '../../../components/view-visibility/ViewVisibility.components';

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

export default function RestaurantsScreen({ navigation }) {
    const { restaurants, isRestaurantLoading, error } = useContext(RestaurantContext);
    const { isLocationLoading } = useContext(LocationContext);

    const [isToggled, setIsToggled] = useState(false);

    const isLoading = isRestaurantLoading || isLocationLoading;

    return (
        <RestaurantsScreenContainer>
            <Search
                isFavoritesToggled={isToggled}
                onFavoritesToggled={() => setIsToggled?.(!isToggled)}
            />
            <ViewVisibility isVisible={isToggled}>
                <FavoritesBar />
            </ViewVisibility>
            <ViewVisibilityStyled isVisible={isLoading}>
                <LoadingIndicator />
            </ViewVisibilityStyled>
            <ViewVisibilityStyled isVisible={!isLoading}>
                <RestaurantListContainer
                    data={restaurants}
                    renderItem={(flatItem) => {
                        const { item, index } = flatItem;

                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation?.navigate?.(routeName?.restaurantDetail, {
                                        restaurant: item,
                                    })
                                }
                            >
                                <Spacer position={'bottom'} scale={'large'}>
                                    <RestaurantInfoCard restaurant={{ ...item }} />
                                </Spacer>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item?.name}
                />
            </ViewVisibilityStyled>
        </RestaurantsScreenContainer>
    );
}
