import React, { useContext, useState } from 'react';
import { SearchBarContainer, SearchbarStyled } from '../screens/restaurants.styles';
import { LocationContext } from '../../../services/location/location.context';

export default function Search() {
    const { keyword, search } = useContext(LocationContext);

    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchBarContainer>
            <SearchbarStyled
                placeholder="Search for the location"
                value={searchKeyword}
                onSubmitEditing={() => search?.(searchKeyword)}
                onChangeText={(text) => setSearchKeyword(text)}
            />
        </SearchBarContainer>
    );
}
