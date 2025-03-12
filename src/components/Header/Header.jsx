import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { authentificationUser } from "../../redux/authReducer";
import { LogoutItem } from "./LogoutItem";
import NightMode from "./NightMode/NightMode";
export default function Header() {
  const dispatch = useDispatch();

  // Берем данные из authReducer
  const { isLogin, login } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authentificationUser()); // Загружаем данные пользователя при монтировании
  }, [dispatch]);

  return (
    <header className={classes.header}>
      <img 
        src="https://www.freepngimg.com/thumb/team/141690-logo-fc-barcelona-free-photo.png" 
        alt="FC Barcelona Logo"
      />
      <div className={classes.loginBlock}>
        <NightMode/>
        {isLogin ? (
          <div>
            <p>{login}</p>
            <LogoutItem />
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
}
