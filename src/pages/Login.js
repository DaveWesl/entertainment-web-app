import React, { useState } from 'react';
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setIsEmpty(false); // Setze isEmpty auf false, wenn das Input-Feld geändert wird
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (password.trim() === "") {
      setIsEmpty(true);
    }
  };

  return (
    <div className="login">
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
      <form className="login-form">
        <h1>Login</h1>
        <input
          className={isEmpty ? "login-input login-input-empty" : "login-input"}
          type="email"
          id="email"
          name="email"
          placeholder={isEmpty ? "Email address (can't be empty)" : "Email address"}
          value={email}
          onChange={handleInputChange}
        />
        <input
          className={isEmpty ? "login-input login-input-empty" : "login-input"}
          type="password"
          id="password"
          name="password"
          placeholder={isEmpty ? "Password (can't be empty)" : "Password"}
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
          <p className="s login-sign-up">Sign Up</p>
        </div>
      </form>
    </div>
  );
}

export default Login;
