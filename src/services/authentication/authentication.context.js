import React, { useState, createContext, useEffect } from 'react';
import { loginRequest, registerRequest } from './authentication.service';
import { inMemoryPersistence, initializeAuth, signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [auth, setAuth] = useState(null);
    const [app, setApp] = useState(null);

    const _onInitializedFirebaseApp = () => {
        if (app) {
            const _auth = initializeAuth(app, { persistence: inMemoryPersistence });

            setAuth(_auth);
        }
    };

    const _onMount = async () => {
        const user = await AsyncStorage.getItem('@user');

        if (user) {
            setUser(JSON.parse(user));
            setIsAuthenticated(true);
        }
    };

    const _onUserInfoChange = async () => {
        if (user) {
            await AsyncStorage.setItem('@user', JSON.stringify(user));
        } else {
            const _user = await AsyncStorage.getItem('@user');

            if (_user) {
                await AsyncStorage.removeItem('@user');
            }
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
            setIsLoading(false);
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
            }

            setIsLoading(false);
        } catch (error) {
            setError(error?.toString());
            setIsLoading(false);
        }
    };

    const onLogout = () => {
        setUser(null);
        signOut(auth);
        setIsAuthenticated(false);
    };

    const clearError = () => {
        setError(null);
    };

    useEffect(() => {
        _onMount();
    }, []);

    useEffect(() => {
        _onUserInfoChange();
    }, [user]);

    useEffect(() => {
        _onInitializedFirebaseApp();
    }, [app]);

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
