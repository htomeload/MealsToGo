import React, { useState, createContext, useEffect, useContext } from 'react';

import { restaurantRequest, restaurantsTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location, error: locationError } = useContext(LocationContext);

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
        } catch (error) {
            console.log(error.stack);
            setIsLoading(false);
            setRestaurants([]);
            setError(error?.toString());
        }
    };

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
