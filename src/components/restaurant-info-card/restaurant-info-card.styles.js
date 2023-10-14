import { View, Image } from 'react-native';
import styled from 'styled-components/native';
import Text from '../typography/text.components';
import { Card } from 'react-native-paper';

export const CategoryIcon = styled(Image)`
    width: 15px;
    height: 15px;
`;

export const Title = styled(Text)`
    padding-bottom: ${(props) => props.theme?.space?.[1]};
`;

export const Address = styled(Text)`
    padding-bottom: ${(props) => props.theme?.space?.[3]};
`;

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors?.bg?.primary};
    padding-horizontal: ${(props) => props.theme?.space?.[3]};
    overflow: hidden;
    border-radius: 4px;
    padding-bottom: ${(props) => props.theme?.space?.[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors?.bg?.primary};
    padding-vertical: ${(props) => props.theme?.space?.[3]};
    border-radius: 0px;
`;

export const RatingAndOpening = styled(View)`
    flex-direction: row;
    align-items: center;
`;

export const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme?.space?.[2]};
    padding-bottom: ${(props) => props.theme?.space?.[2]};
`;

export const ClosedTemporary = styled(Text)`
    color: ${(props) => props.theme.colors?.text?.error};
`;
