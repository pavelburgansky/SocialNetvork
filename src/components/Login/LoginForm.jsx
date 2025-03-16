import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/authReducer";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.auth.isLogin);
  const error = useSelector((state) => state.auth.error);

  useEffect(() => {
    if (isLogin) {
      navigate("/profile");
    }
  }, [isLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    // Отправка запроса на логин
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Вход</h2>

        {/* Отображение ошибки если есть */}
        {error && <p className="error-message">{error}</p>}

        <div className="input-group">
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите ваш email"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введите ваш пароль"
          />
        </div>

        <button type="submit" className="login-btn">Войти</button>
      </form>
    </div>
  );
};

export default LoginForm;
