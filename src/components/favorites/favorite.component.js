import React, { useContext } from 'react';
import styled from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from '../../services/favorites/favorites.context';
import { TouchableOpacity } from 'react-native';
import { colors } from '../../infrastructure/theme/colors';

const FavoriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 10px;
    z-index: 9;
`;

export default function Favorite({ restaurant }) {
    const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);

    const isFavorited = favorites?.find((r) => r?.placeId === restaurant?.placeId);

    return (
        <FavoriteButton
            onPress={() =>
                !isFavorited ? addToFavorites?.(restaurant) : removeFromFavorites?.(restaurant)
            }
        >
            <AntDesign
                name={isFavorited ? 'heart' : 'hearto'}
                size={24}
                color={isFavorited ? colors.text.error : 'white'}
            />
        </FavoriteButton>
    );
}
