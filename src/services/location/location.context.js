import React, { useState, createContext, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState('');

    let _timer = null;

    const onSearch = (searchKeyword) => {
        setIsLoading(true);

        _timer = setTimeout(async () => {
            try {
                if (!searchKeyword?.length) return;

                setKeyword(searchKeyword);
                const result = await locationRequest(searchKeyword?.toLowerCase());

                if (result) {
                    setLocation(locationTransform(result));
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

    return (
        <LocationContext.Provider
            value={{
                isLocationLoading: isLoading,
                error,
                location,
                searchLocation: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
