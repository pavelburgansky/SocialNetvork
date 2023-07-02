import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
debugger
const PrivateRoute = ({children}) => {
  const isLoggedIn = useContext(AuthContext)
  debugger
  return isLoggedIn ? <Navigate to="/login" /> : <>{children}</>;
}
export default PrivateRoute;