import {
    Navigate,
} from 'react-router-dom';

import {
    useAuth,
} from '../context/AuthContext';
import React from "react";

interface Props {

    children:
        React.ReactNode;

}

function PublicRoute({
                         children,
                     }: Props) {

    const {
        user,
        loading,
    } = useAuth();

    if (loading) {

        return null;
    }

    if (user) {

        return (
            <Navigate to="/" />
        );
    }

    return children;
}

export default PublicRoute;