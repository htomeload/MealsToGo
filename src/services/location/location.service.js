import camelize from 'camelize';
import { apiRoutes } from '../../constants/api.constants';

export const locationRequest = async (searchTerm) => {
    try {
        const result = await fetch(apiRoutes.geocode(searchTerm));
        return result?.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const locationTransform = (result) => {
    const { geometry = {} } = camelize(result?.results)?.[0];
    const { lat = 0, lng = 0 } = geometry?.location;

    return { lat, lng, viewport: geometry?.viewport };
};
