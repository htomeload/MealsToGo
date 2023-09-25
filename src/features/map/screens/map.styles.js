import styled from 'styled-components';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';

export const MapScreenContainer = styled(View)`
    flex: 1;
`;

export const MapViewFullScreen = styled(MapView)`
    height: 100%;
    width: 100%;
`;

export const SearchBarContainer = styled(View)`
    padding: ${(props) => props.theme?.space?.[2]};
    position: absolute;
    z-index: 999;
    width: 100%;
`;

export const SearchbarStyled = styled(Searchbar)`
    border-radius: 3px;
`;
