import React, { useState, createContext, useEffect, useContext } from 'react';
import { AuthenticationContext } from '../authentication/authentication.context';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);

    const [cart, setCart] = useState([]);
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const add = (item, shop) => {
        if (!restaurant || restaurant.placeId !== shop.placeId) {
            setRestaurant(shop);
            setCart([item]);
        }
        setCart([...cart, item]);
    };

    const clear = () => {
        setCart([]);
        setRestaurant(null);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                restaurant,
                isCartLoading: isLoading,
                error,
                addToCart: add,
                clearCart: clear,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
