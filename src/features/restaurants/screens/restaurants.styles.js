import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components';
import ViewVisibility from '../../../components/view-visibility/ViewVisibility.components';
import Text from '../../../components/typography/text.components';

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

export const FavoritesBarWrapper = styled(ViewVisibility)`
    ${({ isVisible }) => (isVisible ? `flex: 0.5;` : `flex: 0;`)}
`;

export const ErrorText = styled(Text)`
    flex: 1;
    padding-left: ${(props) => props.theme?.space?.[2]};
    padding-right: ${(props) => props.theme?.space?.[2]};
`;
