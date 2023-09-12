import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default function RestaurantInfo({ restaurant }) {
    const { name, icon, photos, address, openingHours, rating, isClosedTemporary, isOpenNow } =
        restaurant;

    return (
        <View style={Styles.container}>
            <Text>Info</Text>
        </View>
    );
}
