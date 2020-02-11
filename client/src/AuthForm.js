import React from "react";
const AuthForm = props => {
  const { handleChange, handleSubmit, username, password, btnText } = props;

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
        <button>{btnText}</button>
        <br />
      </form>
    </div>
  );
};

export default AuthForm;
