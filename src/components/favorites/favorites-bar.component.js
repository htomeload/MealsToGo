import React from 'react';
import styled from 'styled-components';
import { View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info.components';
import Spacer from '../spacer/Spacer.components';
import Text from '../typography/text.components';

const FavoritesWrapper = styled(View)`
    flex: 1;
    padding: 10px;
    width: 100%;
`;

const FavoriteRestaurantsList = styled(FlatList)`
    flex: 1;
`;

export default function FavoritesBar({ favorites, onPressItem }) {
    if (!favorites?.length) return null;

    return (
        <FavoritesWrapper>
            <Text variant="hint">Favorites</Text>
            <FavoriteRestaurantsList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={favorites}
                renderItem={(flatItem) => {
                    const { item, index } = flatItem;

                    return (
                        <Spacer
                            position={'right'}
                            scale={'large'}
                            key={`favorite-restaurant-${item?.name}-item-${index}`}
                        >
                            <TouchableOpacity onPress={() => onPressItem?.(item)}>
                                <CompactRestaurantInfo restaurant={item} />
                            </TouchableOpacity>
                        </Spacer>
                    );
                }}
            />
        </FavoritesWrapper>
    );
}
