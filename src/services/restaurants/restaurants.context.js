import React, { useState, createContext, useEffect, useMemo, useContext } from 'react';

import { restaurantRequest, restaurantsTransform } from './restaurants.service';
import { LocationContext } from '../location/location.context';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    let _timer = null;

    const fetchRestaurants = (latlng) => {
        setIsLoading(true);

        _timer = setTimeout(async () => {
            try {
                const result = await restaurantRequest(latlng);

                if (result?.results) {
                    const transformedResult = restaurantsTransform(result);
                    setRestaurants(transformedResult);
                } else {
                    setError(result);
                }

                setIsLoading(false);
                clearTimeout(_timer);
            } catch (error) {
                setIsLoading(false);
                setError(error);
                clearTimeout(_timer);
            }
        }, 1000);
    };

    useEffect(() => {
        return () => clearTimeout(_timer);
    }, []);

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
