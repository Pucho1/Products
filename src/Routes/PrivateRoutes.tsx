import { useAuthStore } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router';

const PrivateRoutes = () => {
    const isAuntenticated = useAuthStore().isAuthenticated;

    console.log('isAuntenticated', isAuntenticated);
 

  return isAuntenticated 
    ? <Outlet />
    : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
