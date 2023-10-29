import React, { useState, createContext, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState('Antwerp');

    const handleSetKeyword = (value) => {
        setIsLoading(true);
        setKeyword(value);
    };

    const onSearch = async () => {
        try {
            if (!keyword?.length) return;
            const result = await locationRequest(keyword?.toLowerCase());
            if (result) {
                setLocation(locationTransform(result));
                setError(null);
            } else {
                setError(result);
                setLocation(null);
            }

            setIsLoading(false);
        } catch (error) {
            console.log(error.stack);
            setIsLoading(false);
            setError(error?.toString());
            setLocation(null);
        }
    };

    useEffect(() => {
        onSearch?.();
    }, [keyword]);

    return (
        <LocationContext.Provider
            value={{
                isLocationLoading: isLoading,
                error,
                location,
                searchLocation: handleSetKeyword,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
