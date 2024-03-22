import React from "react";

const RegisterForm = () => {
  return (
    <div className="login-form">
      <h2>Register</h2>

      <form>
        <div className="form-group">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
          />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username or email"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
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

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit">
          <a href="courses-1">RegisterForm </a>
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
