import camelize from 'camelize';
import { mocks, mockImages } from './mock';

export const restaurantRequest = (location = '51.219448,4.402464') => {
    return new Promise((resolve, reject) => {
        try {
            const mock = mocks?.[location];
            if (!mock) reject('not found');
            resolve(mock);
        } catch (error) {
            reject(error);
        }
    });
};

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResult = results?.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });

        return {
            ...restaurant,
            isOpenNow: restaurant?.opening_hours && restaurant?.opening_hours?.open_now,
            isClosedTemporary: restaurant?.business_status === 'CLOSED_TEMPORARILY',
        };
    });
    return camelize(mappedResult);
};
