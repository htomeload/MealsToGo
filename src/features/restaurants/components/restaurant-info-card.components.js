import React from 'react';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from './../../../../assets/star';
import open from './../../../../assets/open';
import { View } from 'react-native';
import Spacer from '../../../components/spacer/Spacer.components';
import Text from '../../../components/typography/text.components';
import styled from 'styled-components/native';

import { CategoryIcon } from './restaurant-info-card.styles';

const Title = styled(Text)`
    padding-bottom: ${(props) => props.theme?.space?.[1]};
`;

const Address = styled(Text)`
    padding-bottom: ${(props) => props.theme?.space?.[3]};
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors?.bg?.primary};
    padding-horizontal: ${(props) => props.theme?.space?.[3]};
    overflow: hidden;
    border-radius: 4px;
    padding-bottom: ${(props) => props.theme?.space?.[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: ${(props) => props.theme.colors?.bg?.primary};
    padding: ${(props) => props.theme?.space?.[3]};
    border-radius: 0px;
`;

const RatingAndOpening = styled(View)`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled(View)`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme?.space?.[2]};
    padding-bottom: ${(props) => props.theme?.space?.[2]};
`;

const ClosedTemporary = styled(Text)`
    color: ${(props) => props.theme.colors?.text?.error};
`;

export default function RestaurantInfoCard({ restaurant }) {
    const { name, icon, photos, address, openingHours, rating, isClosedTemporary, isOpenNow } =
        restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos?.[0] }} />
            <Title variant="body">{name}</Title>
            <RatingAndOpening>
                <Rating>
                    {ratingArray?.map((item, index) => (
                        <SvgXml key={`${name}-rating-${index}`} xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <SectionEnd>
                    {isClosedTemporary && (
                        <ClosedTemporary variant="error">CLOSE TEMPORARY</ClosedTemporary>
                    )}
                    <Spacer position="left" scale="large">
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                    </Spacer>
                    <Spacer position="left" scale="large">
                        <CategoryIcon source={{ uri: icon }} />
                    </Spacer>
                </SectionEnd>
            </RatingAndOpening>
            <Address variant="caption">{address}</Address>
        </RestaurantCard>
    );
}
