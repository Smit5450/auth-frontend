import {

    createContext,

    useContext,

    useEffect,

    useState,

} from 'react';

import api from '../services/api';

interface User {

    id: string;

    name: string;

    email: string;

}

interface AuthContextType {

    user: User | null;

    loading: boolean;

    logout: () => void;

    login: (
        token: string,
        user: User,
    ) => void;

}

const AuthContext =
    createContext<
        AuthContextType | undefined
    >(undefined);

export function AuthProvider({
                                 children,
                             }: {
    children: React.ReactNode;
}) {

    const [user, setUser] =
        useState<User | null>(null);

    const [loading, setLoading] =
        useState(true);

    useEffect(() => {

        const fetchUser =
            async () => {

                try {

                    const token =
                        localStorage.getItem(
                            'token',
                        );

                    if (!token) {

                        setLoading(false);

                        return;
                    }

                    const response =
                        await api.get(
                            '/auth/me',
                        );

                    setUser(
                        response.data,
                    );

                } catch {

                    localStorage.removeItem(
                        'token',
                    );

                    localStorage.removeItem(
                        'user',
                    );

                } finally {

                    setLoading(false);

                }
            };

        fetchUser();

    }, []);

    const logout = () => {

        localStorage.removeItem(
            'token',
        );

        localStorage.removeItem(
            'user',
        );

        setUser(null);
    };

    const login = (
        token: string,
        user: User,
    ) => {

        localStorage.setItem(
            'token',
            token,
        );

        localStorage.setItem(
            'user',
            JSON.stringify(user),
        );

        setUser(user);
    };

    return (

        <AuthContext.Provider

            value={{

                user,

                loading,

                logout,

                login,

            }}
        >

            {children}

        </AuthContext.Provider>
    );
}

export function useAuth() {

    const context =
        useContext(AuthContext);

    if (!context) {

        throw new Error(
            'useAuth must be used inside AuthProvider',
        );
    }

    return context;
}