import React, { Fragment } from "react";
// import {} from "@material-ui/core";
// import { Useform } from "react-hook-form";
import "./form.css";

export default function SignIn() {
  return (
    <Fragment>
      {/* Logo */}
      <h1 className="d-flex justify-content-start">FrenZone</h1>

      {/* !!! Recent Logins Cards - copy Facebook*/}
      <p>Recent Logins</p>
      <span>Click your picture or add an account.</span>

      {/* Login Form */}

      <form>
        <input type="name" placeholder="username or email" />
        <input type="password" placeholder="password" />
        <button className="btn btn-primary btn-login d-flex justify-content-center">
          Log In
        </button>
        <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-link">
            Forgot Password?
          </button>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <button className="btn btn-signup" type="submit">
            Creat New Account
          </button>
        </div>
      </form>
    </Fragment>
  );
}
