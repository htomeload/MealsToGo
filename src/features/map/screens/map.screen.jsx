import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { MapViewFullScreen, MapScreenContainer } from './map.styles';
import Search from '../components/search.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { LocationContext } from '../../../services/location/location.context';
import { Marker } from 'react-native-maps';

export default function MapScreen(props) {
    const { restaurants, isRestaurantLoading, error } = useContext(RestaurantContext);
    const { location, isLocationLoading } = useContext(LocationContext);

    const [latDelta, setLatDelta] = useState(0);

    const { lat, lng, viewport } = location;

    useEffect(() => {
        const northeastLat = viewport?.northeast?.lat;
        const southwestLat = viewport?.southwest?.lat;

        const _latDelta = northeastLat - southwestLat;

        setLatDelta(_latDelta);
    }, [location, viewport]);

    return (
        <MapScreenContainer>
            <Search />
            <MapViewFullScreen
                region={{
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: latDelta,
                    longitudeDelta: 0.02,
                }}
            >
                {restaurants?.map((restaurant) => (
                    <Marker
                        key={`map-marker-${restaurant?.name}-${restaurant?.geometry?.location?.lat}-${restaurant?.geometry?.location?.lng}`}
                        coordinate={{
                            latitude: restaurant?.geometry?.location?.lat,
                            longitude: restaurant?.geometry?.location?.lng,
                        }}
                    />
                ))}
            </MapViewFullScreen>
        </MapScreenContainer>
    );
}
