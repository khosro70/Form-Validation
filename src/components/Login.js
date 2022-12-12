import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { notify } from "./toast";

import "./SignUp.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  const [checked, setChecked] = useState(false);

  const focusHandler = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  useEffect(() => {
    setChecked(true);
  }, []);

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    setChecked(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("you loged in successfully", "success");
    } else {
      notify("invalid data", "error");
      setTouched({
        email: true,
        password: true,
      });
      setChecked(false);
    }
  };

  return (
    <div className="col-9 col-sm-6 col-md-6 col-lg-4">
      <form onSubmit={submitHandler}>
        <h2
          className="text-center mb-2"
          style={{ fontWeight: "bold", color: "hsl(238, 69%, 40%)" }}
        >
          Login
        </h2>
        <div className="mb-2">
          <label className="form-label mb-1">Email</label>
          <input
            className={`${
              errors.email && touched.email
                ? "form-control"
                : "success form-control"
            }`}
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <div
            style={{ height: "21px" }}
            className={`form-text ${
              errors.email && touched.email ? "visible" : "invisible"
            }`}
          >
            {errors.email}
          </div>
        </div>
        <div className="mb-2">
          <label className="form-label mb-1">Password</label>
          <input
            className={`${
              errors.password && touched.password
                ? "form-control"
                : "success form-control"
            }`}
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <div
            style={{ height: "21px" }}
            className={`form-text ${
              errors.password && touched.password ? "visible" : "invisible"
            }`}
          >
            {errors.password}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/signup" className="text-decoration-none btn btn-secondary">
            SignUp
          </Link>
          <button type="submit" className="btn btn-info">
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
