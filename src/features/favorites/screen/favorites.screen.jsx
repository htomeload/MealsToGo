import React, { useContext } from 'react';
import Spacer from '../../../components/spacer/Spacer.components';
import {
    NoFavorites,
    RestaurantListContainer,
    RestaurantsScreenContainer,
    ViewVisibilityStyled,
} from './../component/favorites.styles';
import { TouchableOpacity } from 'react-native';
import { routeName } from '../../../constants/app.constants';
import { FavoritesContext } from '../../../services/favorites/favorites.context';
import RestaurantInfoCard from '../../../components/restaurant-info-card/restaurant-info-card.components';
import Text from '../../../components/typography/text.components';

export default function FavoritesScreen({ navigation }) {
    const { favorites } = useContext(FavoritesContext);

    const onNavigate = (item) => {
        navigation?.navigate?.(routeName?.restaurantDetail, {
            restaurant: item,
        });
    };

    return (
        <RestaurantsScreenContainer>
            <ViewVisibilityStyled isVisible={favorites?.length}>
                <RestaurantListContainer
                    data={favorites}
                    renderItem={(flatItem) => {
                        const { item, index } = flatItem;

                        return (
                            <TouchableOpacity
                                onPress={() => onNavigate?.(item)}
                                style={{ flex: 1 }}
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
            <NoFavorites isVisible={!favorites?.length}>
                <Text>No Favorites yet</Text>
            </NoFavorites>
        </RestaurantsScreenContainer>
    );
}
