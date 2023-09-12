import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestaurantInfo from '../components/restaurant-info.components';

const mockRestaurantInfo = {
    name: 'Default Name',
    icon: '',
    photos: ['https://i.imgur.com/4q0Jo6G.jpg'],
    address: '999/99 Default Address',
    openingHours: '08:00',
    isOpenNow: true,
    rating: 4,
    isClosedTemporary: false,
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        padding: 8,
    },
    searchBar: {
        borderRadius: 3,
    },
    list: {
        flex: 1,
        padding: 12,
        backgroundColor: 'green',
    },
});

export default function RestaurantsScreen() {
    return (
        <View style={Styles.container}>
            <View style={Styles.search}>
                <Searchbar style={Styles.searchBar} />
            </View>
            <View style={Styles.list}>
                <RestaurantInfo restaurant={mockRestaurantInfo} />
            </View>
        </View>
    );
}
