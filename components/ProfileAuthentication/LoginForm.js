import React from "react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2>Login</h2>

      <form>
        <div className="form-group">
          <label>Username or email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username or email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button type="submit">
          <a href="courses-1"> Log In </a>
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
