import React from 'react';
import styled from 'styled-components/native';
import { Card, Text } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from './../../../../assets/star';
import open from './../../../../assets/open';
import { View, Image } from 'react-native';
import Spacer from '../../../components/spacer/Spacer.components';

const Title = styled(Text)`
    padding-bottom: ${(props) => props.theme?.space?.[1]};
    color: ${(props) => props.theme.colors?.ui?.primary};
    font-family: ${(props) => props.theme?.fonts?.heading};
    font-size: ${(props) => props.theme?.fontSizes?.body};
`;

const Address = styled(Text)`
    color: ${(props) => props.theme.colors?.ui?.primary};
    font-family: ${(props) => props.theme?.fonts?.body};
    font-size: ${(props) => props.theme?.fontSizes?.caption};
    padding-bottom: ${(props) => props.theme?.space?.[3]};
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors?.bg?.primary};
    padding-horizontal: ${(props) => props.theme?.space?.[3]};
    overflow: hidden;
    border-radius: 4px;
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

const CategoryIcon = styled(Image)`
    width: 15px;
    height: 15px;
`;

export default function RestaurantInfoCard({ restaurant }) {
    const { name, icon, photos, address, openingHours, rating, isClosedTemporary, isOpenNow } =
        restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos?.[0] }} />
            <Title>{name}</Title>
            <RatingAndOpening>
                <Rating>
                    {ratingArray?.map((item, index) => (
                        <SvgXml key={`${name}-rating-${index}`} xml={star} width={20} height={20} />
                    ))}
                </Rating>
                <SectionEnd>
                    {isClosedTemporary && (
                        <ClosedTemporary variant="labelMedium">CLOSE TEMPORARY</ClosedTemporary>
                    )}
                    <Spacer variant={'left.large'} />
                    {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                    <Spacer variant={'left.large'} />
                    <CategoryIcon source={{ uri: icon }} />
                </SectionEnd>
            </RatingAndOpening>
            <Address>{address}</Address>
        </RestaurantCard>
    );
}
