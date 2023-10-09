import React, { useState, createContext, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication.context';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);

    const [favorites, setFavorites] = useState([]);

    const saveFavorites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(`@favorites-${user?.uid}`, jsonValue);
        } catch (error) {
            console.log(error);
        }
    };

    const loadFavorites = async () => {
        try {
            const value = await AsyncStorage.getItem(`@favorites-${user?.uid}`);

            if (value) {
                setFavorites(JSON.parse(value));
            } else {
                setFavorites([]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const add = (restaurant) => {
        const newFavorites = [...favorites, restaurant];

        setFavorites(newFavorites);
        saveFavorites(newFavorites);
    };

    const remove = (restaurant) => {
        const newFavorites = favorites?.filter((x) => x?.placeId !== restaurant?.placeId);

        setFavorites(newFavorites);
        saveFavorites(newFavorites);
    };

    useEffect(() => {
        if (user) {
            loadFavorites();
        }
    }, [user]);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                addToFavorites: add,
                removeFromFavorites: remove,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
