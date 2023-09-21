import React, { useState, createContext, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState('San Francisco');

    const onSearch = async (searchKeyword) => {
        try {
            if (searchKeyword?.length) return;

            setIsLoading(true);
            setKeyword(searchKeyword);

            const result = await locationRequest(searchKeyword?.toLowerCase());
            setLocation(locationTransform(result));

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(error);
        }
    };

    useEffect(() => {
        onSearch(keyword);
    }, []);

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
