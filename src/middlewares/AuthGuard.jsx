import React from 'react';
import { Navigate } from 'react-router-dom';
import paths from "@/constants/path-names.json";

export const AuthGuard= ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) return <Navigate to={paths?.login} replace />;
    return children;
};

export const PublicGuard= ({ children }) => {
    const token = localStorage.getItem('token');
    if (token) return <Navigate to={paths?.home} replace />;
    return children;
};