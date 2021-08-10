import React, { useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { dispatch } = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull");
      history.push("/");
    }
  };

  return (
    <>
      <section className="login">
        <div className="container mt-5 ">
          <div className="login-content">
            <div className="login-form">
              <h2 className="form-title">Sign in</h2>
              <form method="POST" className="login-form" id="register-form">
                <div className="form-group m-3">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group m-3">
                  <label htmlFor="password"></label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group form-button m-3">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit form-control bg-primary"
                    value="Log In"
                    onClick={loginUser}
                    style={{ color: "white" }}
                  />
                </div>
                <NavLink to="/signup" className="signup-image-link m-3">
                  Create An Account
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
