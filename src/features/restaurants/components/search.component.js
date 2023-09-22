import React, { useContext, useEffect, useState } from 'react';
import { SearchBarContainer, SearchbarStyled } from '../screens/restaurants.styles';
import { LocationContext } from '../../../services/location/location.context';

export default function Search() {
    const { keyword, searchLocation } = useContext(LocationContext);

    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchBarContainer>
            <SearchbarStyled
                placeholder="Search for the location"
                value={searchKeyword}
                onSubmitEditing={() => searchLocation?.(searchKeyword)}
                onChangeText={(text) => setSearchKeyword(text)}
            />
        </SearchBarContainer>
    );
}
