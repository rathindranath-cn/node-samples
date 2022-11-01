// global components
import { Navigate } from 'react-router-dom';

// local components
import { auth } from '../auth';

export const PublicRoute = ({ children }) => {
    return auth() ? <Navigate to="/dashboard" /> : children;
}