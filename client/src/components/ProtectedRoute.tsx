import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState } from '../app/store';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  // return !isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
  return  <Outlet />;
};

export default ProtectedRoute;