import React, { useState, createContext, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState('Antwerp');

    let _timer = null;

    const handleSetKeyword = (value) => {
        setIsLoading(true);
        setKeyword(value);
    };

    const onSearch = () => {
        _timer = setTimeout(async () => {
            try {
                if (!keyword?.length) return;
                const result = await locationRequest(keyword?.toLowerCase());

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
