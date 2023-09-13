import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const Title = styled.Text`
    padding-horizontal: 16px;
    padding-bottom: 16px;
`;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        borderRadius: 4,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    cardCover: {
        borderRadius: 0,
        padding: 16,
        backgroundColor: 'white',
    },
    title: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

export default function RestaurantInfoCard({ restaurant }) {
    const { name, icon, photos, address, openingHours, rating, isClosedTemporary, isOpenNow } =
        restaurant;

    return (
        <Card elevation={5} style={Styles.cardContainer}>
            <Card.Cover key={name} source={{ uri: photos?.[0] }} style={Styles.cardCover} />
            <Title>{name}</Title>
        </Card>
    );
}
