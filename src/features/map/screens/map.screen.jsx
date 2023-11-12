import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { MapViewFullScreen, MapScreenContainer } from './map.styles';
import Search from '../components/search.component';
import { RestaurantContext } from '../../../services/restaurants/restaurants.context';
import { LocationContext } from '../../../services/location/location.context';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapCallout from '../components/map-callout.component';
import { routeName } from '../../../constants/app.constants';

export default function MapScreen({ navigation }) {
    const { restaurants, isRestaurantLoading, error } = useContext(RestaurantContext);
    const { location, isLocationLoading } = useContext(LocationContext);

    const [latDelta, setLatDelta] = useState(0);

    const lat = location?.lat ?? 0;
    const lng = location?.lng ?? 0;
    const viewport = location?.viewport ?? {};

    useEffect(() => {
        const northeastLat = viewport?.northeast?.lat ?? 0;
        const southwestLat = viewport?.southwest?.lat ?? 0;

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
                provider={PROVIDER_GOOGLE}
            >
                {restaurants?.map((restaurant) => (
                    <Marker
                        key={`map-marker-${restaurant?.name}-${restaurant?.geometry?.location?.lat}-${restaurant?.geometry?.location?.lng}`}
                        coordinate={{
                            latitude: restaurant?.geometry?.location?.lat,
                            longitude: restaurant?.geometry?.location?.lng,
                        }}
                        title={restaurant?.name}
                    >
                        <MapCallout
                            restaurant={restaurant}
                            onPress={() =>
                                navigation?.navigate?.(routeName.restaurantDetail, { restaurant })
                            }
                        />
                    </Marker>
                ))}
            </MapViewFullScreen>
        </MapScreenContainer>
    );
}
