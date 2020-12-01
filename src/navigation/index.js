import React from 'react';
import { AuthProvider } from './AuthProvider'
import Routes from './Routes';

const Providers = () => {
    return (
        <AuthProvider>
            <Routes></Routes>
        </AuthProvider>
    )
}

export default Providers;
