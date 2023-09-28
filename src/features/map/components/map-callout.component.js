import React from 'react';
import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info.components';
import { Callout } from 'react-native-maps';

export default function MapCallout({ restaurant, onPress }) {
    return (
        <Callout onPress={onPress}>
            <CompactRestaurantInfo restaurant={restaurant} />
        </Callout>
    );
}
