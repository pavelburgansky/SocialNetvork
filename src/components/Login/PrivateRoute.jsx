import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
debugger
const PrivateRoute = ({children}) => {
  const {isLoggedIn} = useContext(AuthContext)
  debugger
  return (isLoggedIn ?<>{children}</>:<Navigate to="/login" /> )
}
export default PrivateRoute;