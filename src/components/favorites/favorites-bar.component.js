import React from 'react';
import styled from 'styled-components';
import { View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info.components';
import Spacer from '../spacer/Spacer.components';
import Text from '../typography/text.components';
import { Card } from 'react-native-paper';

const FavoritesWrapper = styled(Card)`
    flex: 1;
    z-index: 999;
    padding-top: ${(props) => props.theme?.space?.[3]};
    padding-left: ${(props) => props.theme?.space?.[3]};
    padding-right: ${(props) => props.theme?.space?.[3]};
    border-radius: 15px;
`;

const FavoritesContentWrapper = styled(View)`
    height: 100%;
    width: 100%;
`;

const FavoriteRestaurantsList = styled(FlatList)`
    flex: 1;
`;

export default function FavoritesBar({ favorites, onPressItem }) {
    if (!favorites?.length) return null;

    return (
        <FavoritesWrapper>
            <FavoritesContentWrapper>
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
            </FavoritesContentWrapper>
        </FavoritesWrapper>
    );
}
