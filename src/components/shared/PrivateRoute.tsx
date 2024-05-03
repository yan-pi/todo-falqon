import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store'; // Importe o tipo RootState da sua store

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
