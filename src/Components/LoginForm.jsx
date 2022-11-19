import React from "react";

const LoginForm = () => {
  return (
    <div>
      <h1>LOGIN FORM</h1>
      <div class="data">
        <label>Email or Phone</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <input type="password" />
        <div class="forgot-pass">
          <a href="#">Forgot Password?</a>
        </div>
        <div>
          <button
            style={{ bgColor: "black" }}
            className="btn btn-primary"
            type="Submit"
          >
            {" "}
            Login{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
