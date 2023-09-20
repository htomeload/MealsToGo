import React, { useState, createContext, useEffect, useMemo } from 'react';

import { restaurantRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    let _timer = null;

    const fetchRestaurants = () => {
        setIsLoading(true);
        _timer = setTimeout(async () => {
            try {
                const result = await restaurantRequest();

                clearTimeout(_timer);

                if (result?.results) {
                    const transformedResult = restaurantsTransform(result);
                    setRestaurants(transformedResult);
                } else {
                    setError(result);
                }

                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error);
                clearTimeout(_timer);
            }
        }, 2000);

        return () => clearTimeout(_timer);
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantContext.Provider>
    );
};
