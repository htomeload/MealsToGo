import React, { useContext, useEffect, useState } from 'react';
import { SearchBarContainer, SearchbarStyled } from '../screens/restaurants.styles';
import { LocationContext } from '../../../services/location/location.context';

export default function Search({ isFavoritesToggled, onFavoritesToggled }) {
    const { keyword, searchLocation } = useContext(LocationContext);

    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchBarContainer>
            <SearchbarStyled
                icon={isFavoritesToggled ? 'heart' : 'heart-outline'}
                onIconPress={() => onFavoritesToggled?.()}
                placeholder="Search for the location"
                value={searchKeyword}
                onSubmitEditing={() => searchLocation?.(searchKeyword)}
                onChangeText={(text) => setSearchKeyword(text)}
            />
        </SearchBarContainer>
    );
}
