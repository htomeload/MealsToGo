import React, { useState, createContext, useEffect } from 'react';
import { loginRequest, registerRequest } from './authentication.service';
import { inMemoryPersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [auth, setAuth] = useState(null);
    const [app, setApp] = useState(null);

    useEffect(() => {
        _onMount?.();
    }, []);

    useEffect(() => {
        _saveUserInfo?.();
    }, [user]);

    useEffect(() => {
        if (app) {
            const _auth = initializeAuth(app, { persistence: inMemoryPersistence });

            setAuth(_auth);
        }
    }, [app]);

    const _onMount = async () => {
        const user = await AsyncStorage.getItem('user');

        if (user) {
            setUser(JSON.parse(user));
            setIsAuthenticated(true);
        }
    };

    const _saveUserInfo = async () => {
        if (user) {
            await AsyncStorage.setItem('user', JSON.stringify(user));
        }
    };

    const onLogin = async (email, password) => {
        try {
            setIsLoading(true);
            setError(null);

            const result = await loginRequest(auth, email, password);

            if (result?.user) {
                setUser(result?.user);
                setIsAuthenticated(true);
            } else {
                setError(result?.toString());
            }

            setIsLoading(false);
        } catch (error) {
            setError(error?.toString());
        }
    };

    const onRegister = async (email, password, repeatPassword) => {
        try {
            setIsLoading(true);
            setError(null);

            if (password === repeatPassword) {
                const result = await registerRequest(auth, email, password);

                if (result?.user) {
                    setUser(result?.user);
                    setIsAuthenticated(true);
                } else {
                    setError(result?.toString());
                }
            } else {
                setError('Error: Passwords do not match');
                setIsLoading(false);
            }
        } catch (error) {
            setError(error?.toString());
        }
    };

    const onLogout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    const clearError = () => {
        setError(null);
    };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isAuthLoading: isLoading,
                isAuthenticated,
                error,
                onLogin,
                auth,
                setAuth,
                app,
                setApp,
                onRegister,
                clearError,
                onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
