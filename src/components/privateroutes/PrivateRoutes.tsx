import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
type PrivateRoutesProps = {
    isAuthenticated: boolean;
    children: ReactNode;
}

const PrivateRoutes = ({ isAuthenticated, children }: PrivateRoutesProps) => {
    if (!isAuthenticated) return <Navigate to="/" />;
    return children;
}

export default PrivateRoutes;
