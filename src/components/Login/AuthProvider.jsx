import React, { createContext, useState,useContext } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Route, Navigate } from 'react-router-dom';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkAuthentication = 
    async () => {
      debugger
      let url = "https://social-network.samuraijs.com/api/1.0/auth/me";
      const response = await axios.get(url, { withCredentials: true })
      setIsLoggedIn(response.data.resultCode)
    }
  React.useEffect(()=>{
    checkAuthentication();
},[])
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}
