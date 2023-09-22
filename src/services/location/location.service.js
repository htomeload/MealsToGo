import camelize from 'camelize';
import { locations } from './location.mock';

export const locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const locationMock = locations?.[searchTerm];
        if (!locationMock) {
            reject('no location');
        }
        resolve(locationMock);
    });
};

export const locationTransform = (result) => {
    const { geometry = {} } = camelize(result?.results)?.[0];
    const { lat = 0, lng = 0 } = geometry?.location;

    return { lat, lng };
};
