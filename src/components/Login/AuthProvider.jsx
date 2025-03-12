import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkAuthentication = async () => {
    try {
      const url = "https://social-network.samuraijs.com/api/1.0/auth/me";
      const response = await axios.get(url, { withCredentials: true });
      const authenticated = response.data.resultCode === 0;
      setIsLoggedIn(authenticated);
      localStorage.setItem("isLoggedIn", JSON.stringify(authenticated));
    } catch (error) {
      console.error("Ошибка аутентификации:", error);
    }
    finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const storedAuth = localStorage.getItem("isLoggedIn");
    if (storedAuth !== null) {
      setIsLoggedIn(JSON.parse(storedAuth));
      setLoading(false);
    } else {
      checkAuthentication();
    }
  }, []);
  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
