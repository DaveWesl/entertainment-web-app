import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Login.css";

function Login() {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmptyEmail, setIsEmptyEmail] = useState(false);
  const [isEmptyPassword, setIsEmptyPassword] = useState(false);

  const isValidEmail = (email) => {
    // Einfache Überprüfung auf Gültigkeit einer E-Mail-Adresse
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setIsEmptyEmail(false);
    setIsEmptyPassword(false); // Setze isEmpty auf false, wenn das Input-Feld geändert wird
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (password.trim() === "") {
      setIsEmptyPassword(true);
    }
    if (email.trim() === "" || !isValidEmail(email)) {
      setIsEmptyEmail(true);
    }
  };

  return (
    <div className="login">
      <Link to="/" className={location.pathname === "/"}>
        <svg
          className="login-logo"
          width="33"
          height="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
      </Link>
      <form className="login-form">
        <h1>Login</h1>
        <input
          className={
            isEmptyEmail ? "login-input login-input-empty" : "login-input"
          }
          type="email"
          id="email"
          name="email"
          placeholder={
            isEmptyEmail ? "Email address can't be empty" : "Email address"
          }
          value={email}
          onChange={handleInputChange}
        />
        <input
          className={
            isEmptyPassword ? "login-input login-input-empty" : "login-input"
          }
          type="password"
          id="password"
          name="password"
          placeholder={isEmptyPassword ? "Password can't be empty" : "Password"}
          value={password}
          onChange={handleInputChange}
        />
        <button
          className="s login-button"
          type="submit"
          onClick={handleButtonClick}
        >
          Login to your account
        </button>
        <div className="login-account">
          <p className="s">Don’t have an account?</p>
          <Link to="/signup" className={location.pathname === "/signup"}>
            <p className="s login-sign-up">Sign Up</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
