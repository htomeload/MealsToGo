import React, { useState, createContext } from 'react';
import { loginRequest } from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onLogin = async (email, password) => {
        try {
            setIsLoading(true);

            const result = await loginRequest(email, password);

            if (result) {
                setUser(result);
                setIsAuthenticated(true);
            } else {
                setError(result);
            }

            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    };

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isAuthLoading: isLoading,
                isAuthenticated,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    );
};
