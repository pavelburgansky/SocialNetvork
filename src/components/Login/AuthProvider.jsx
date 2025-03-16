import React, { createContext } from "react";
import { useSelector } from "react-redux";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <AuthContext.Provider value={{ isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
