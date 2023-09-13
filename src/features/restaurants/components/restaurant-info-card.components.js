import React from 'react';
import styled from 'styled-components/native';
import { Card, Text } from 'react-native-paper';

const Title = styled(Text)`
    padding-horizontal: 16px;
    padding-bottom: 16px;
`;

const RestaurantCard = styled(Card)`
    background-color: white;
    overflow: hidden;
    border-radius: 4px;
`;

const RestaurantCardCover = styled(Card.Cover)`
    background-color: white;
    padding: 16px;
    border-radius: 0px;
`;

export default function RestaurantInfoCard({ restaurant }) {
    const { name, icon, photos, address, openingHours, rating, isClosedTemporary, isOpenNow } =
        restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos?.[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
}
