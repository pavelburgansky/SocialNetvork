import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Route, Navigate } from 'react-router-dom';
const PrivateRoute = ({ element, ...rest }) => {
    debugger
  const isLoggedIn = useContext(AuthContext);

  return isLoggedIn ? (
    <Navigate to="/login" />
  ) : (
    <Route {...rest} element={element} />
  );
};
export default PrivateRoute;