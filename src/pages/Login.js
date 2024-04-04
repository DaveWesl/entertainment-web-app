import React from "react";
import "./Login.css";

function Login() {
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
          className="login-input"
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          className="login-input"
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <button className="s login-button" type="submit">
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
