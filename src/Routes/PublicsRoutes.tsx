
import { Navigate, Outlet } from "react-router-dom";

import { useAuthStore } from "../context/AuthContext";

const PublicRoute = () => {

  const isAuntenticated = useAuthStore().isAuthenticated;

  return !isAuntenticated 
    ? <Outlet />
    : <Navigate to="/products-list" replace />;
};

export default PublicRoute;