import React from 'react';
import styled from 'styled-components/native';
import { Card, Text } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from './../../../../assets/star';
import { View } from 'react-native';

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

const Rating = styled(View)`
    flex-direction: row;
    padding-top: ${(props) => props.theme?.space?.[2]};
    padding-bottom: ${(props) => props.theme?.space?.[2]};
`;

export default function RestaurantInfoCard({ restaurant }) {
    const { name, icon, photos, address, openingHours, rating, isClosedTemporary, isOpenNow } =
        restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos?.[0] }} />
            <Title>{name}</Title>
            <Rating>
                {ratingArray?.map((item, index) => (
                    <SvgXml key={`${name}-rating-${index}`} xml={star} width={20} height={20} />
                ))}
            </Rating>
            <Address>{address}</Address>
        </RestaurantCard>
    );
}
