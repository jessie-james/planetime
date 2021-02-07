// SignUpForms.js
// ==============================

// imports
import React from "react";

// component
const SignUpForm = props => {
  const {
    handleChange,
    handleSubmit,
    username,
    password,
    password2,
    btnText
  } = props;

  return (
    <div className="container">
      <form onSubmit={handleSubmit} action="" id="form" className="form">
        <p className="form-title-sa">Username</p>
        <input
          type="text"
          name="username"
          className="form-control"
          id="username"
          value={username}
          onChange={handleChange}
          placeholder="Username"
        />
        <br />
        <p className="form-title-sa">Password</p>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <br />
        <p className="form-title-sa">Confirm Password</p>
        <input
          type="password"
          name="password2"
          className="form-control"
          id="password2"
          value={password2}
          onChange={handleChange}
          placeholder="Password"
        />
        <button>{btnText}</button>
      </form>
      <br />
    </div>
  );
};

// exports
export default SignUpForm;
