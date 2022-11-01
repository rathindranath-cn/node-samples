// global components
import { Navigate } from 'react-router-dom';

// local components
import { auth } from '../auth';

export const PrivateRoute = ({ children }) => {
    return auth() ? children : <Navigate to="/" />;
}