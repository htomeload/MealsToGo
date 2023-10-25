import camelize from 'camelize';
import { apiRoutes } from '../../constants/api.constants';

export const restaurantRequest = async (location) => {
    try {
        const result = await fetch(apiRoutes.placesNearby(location));
        return result?.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResult = results?.map((restaurant) => {
        return {
            ...restaurant,
            address: restaurant?.vicinity,
            isOpenNow: restaurant?.opening_hours && restaurant?.opening_hours?.open_now,
            isClosedTemporary: restaurant?.business_status === 'CLOSED_TEMPORARILY',
        };
    });
    return camelize(mappedResult);
};
