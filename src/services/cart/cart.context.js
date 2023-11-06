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
    const [sum, setSum] = useState(0);

    const add = async (item, shop) => {
        try {
            if (!restaurant || restaurant.placeId !== shop.placeId) {
                setRestaurant(shop);
                setCart([item]);
                await AsyncStorage.setItem(`@cart-${user?.uid}`, JSON.stringify([item]));
                await AsyncStorage.setItem(`@cart-shop-${user?.uid}`, JSON.stringify(shop));
            } else {
                setCart([...cart, item]);
                await AsyncStorage.setItem(`@cart-${user?.uid}`, JSON.stringify([...cart, item]));
            }
        } catch (error) {
            setError(error);
        }
    };

    const clear = async () => {
        setCart([]);
        setRestaurant(null);
        setSum(0);
        await AsyncStorage.removeItem(`@cart-${user?.uid}`);
        await AsyncStorage.removeItem(`@cart-shop-${user?.uid}`);
    };

    const _initialCart = async () => {
        try {
            const cartJSON = await AsyncStorage.getItem(`@cart-${user?.uid}`);
            const restaurantJSON = await AsyncStorage.getItem(`@cart-shop-${user?.uid}`);

            if (cartJSON && restaurantJSON) {
                const _cart = JSON.parse(cartJSON);
                const _restaurant = JSON.parse(restaurantJSON);

                setCart(_cart);
                setRestaurant(_restaurant);
            }
        } catch (error) {
            setError(error);
        }
    };

    const _calculateTotal = async () => {
        try {
            let _price = 0;
            cart?.map(({ item, price }, index) => {
                _price += price;
            });
            setSum(_price);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        _initialCart();
    }, []);

    useEffect(() => {
        _calculateTotal();
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                restaurant,
                isCartLoading: isLoading,
                error,
                addToCart: add,
                clearCart: clear,
                total: sum,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
