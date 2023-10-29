import React, { useState, createContext, useEffect, useMemo, useContext } from 'react';

import { restaurantRequest, restaurantsTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location, error: locationError } = useContext(LocationContext);

    let _timer = null;

    const fetchRestaurants = async (latlng) => {
        try {
            setIsLoading(true);
            setRestaurants([]);

            const result = await restaurantRequest(latlng);
            if (result?.results) {
                const transformedResult = restaurantsTransform(result);
                setRestaurants(transformedResult);
                setError(null);
            } else {
                setError(result);
                setRestaurants([]);
            }

            setIsLoading(false);
            clearTimeout(_timer);
        } catch (error) {
            console.log(error.stack);
            setIsLoading(false);
            setRestaurants([]);
            setError(error?.toString());
            clearTimeout(_timer);
        }
    };

    useEffect(() => {
        return () => clearTimeout(_timer);
    }, []);

    useEffect(() => {
        if (locationError) {
            setRestaurants([]);
        }
    }, [locationError]);

    useEffect(() => {
        if (location) {
            const locationString = `${location?.lat},${location?.lng}`;
            fetchRestaurants(locationString);
        }
    }, [location]);

    return (
        <RestaurantContext.Provider value={{ restaurants, isRestaurantLoading: isLoading, error }}>
            {children}
        </RestaurantContext.Provider>
    );
};
