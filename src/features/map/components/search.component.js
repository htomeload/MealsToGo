import React, { useContext, useEffect, useState } from 'react';
import { SearchBarContainer, SearchbarStyled } from '../screens/map.styles';
import { LocationContext } from '../../../services/location/location.context';

export default function Search() {
    const { keyword, searchLocation } = useContext(LocationContext);

    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchBarContainer>
            <SearchbarStyled
                placeholder="Search for the location"
                icon="map"
                value={searchKeyword}
                onSubmitEditing={() => searchLocation?.(searchKeyword)}
                onChangeText={(text) => setSearchKeyword(text)}
            />
        </SearchBarContainer>
    );
}
