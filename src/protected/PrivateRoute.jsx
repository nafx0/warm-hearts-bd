import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!loading && !user) {
      toast.error("Please log in first.");
    }
  }, [loading, user]);

  if (loading) {
    return <span className="loading loading-bars loading-xl"></span>;
  }

  if (user) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
