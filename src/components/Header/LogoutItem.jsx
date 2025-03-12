import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authReducer";

export const LogoutItem = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // <-- вызываем logout, который очищает state
  };

  return <button onClick={handleLogout}>Выйти</button>;
};