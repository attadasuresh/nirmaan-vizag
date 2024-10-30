import React from 'react';
import { Navigate } from 'react-router-dom'; // Use Navigate for redirection
import {jwtDecode} from 'jwt-decode'; // Correct import statement
import Cookies from 'js-cookie';

const AdminSecure = ({ children }) => {
    const token = Cookies.get('jwtToken');

    // Check if token exists
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000; // Convert to seconds
            if (decodedToken.exp < currentTime) {
                alert("Session Expired. Please login again.");
                return <Navigate to="/login" replace />; // Redirect to login
            }
            return children; // Render children (the Dashboard) if valid
        } catch (error) {
            console.error('Invalid token:', error);
            return <Navigate to="/login" replace />; // Redirect on error
        }
    }
    return <Navigate to="/login" replace />; // Redirect if no token
};

export default AdminSecure;