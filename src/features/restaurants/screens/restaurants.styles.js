import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import ViewVisibility from '../../../components/view-visibility/ViewVisibility.components';

export const RestaurantsScreenContainer = styled(View)`
    flex: 1;
`;

export const SearchBarContainer = styled(View)`
    padding: ${(props) => props.theme?.space?.[2]};
`;

export const RestaurantListContainer = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 },
})`
    flex: 1;
`;

export const SearchbarStyled = styled(Searchbar)`
    border-radius: 3px;
`;

export const ViewVisibilityStyled = styled(ViewVisibility)`
    flex: 1;
`;
