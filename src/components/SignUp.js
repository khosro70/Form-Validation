import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { notify } from "./toast";

import "./SignUp.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
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
    setErrors(validate(data, "signup"));
  }, [data, touched]);

  useEffect(() => {
    setChecked(true);
  }, []);

  const changeHandler = (e) => {
    if (e.target.name === "isAccepted") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }

    setChecked(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!Object.keys(errors).length) {
      notify("you signed in successfully", "success");
    } else {
      notify("invalid data", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
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
          SignUp
        </h2>
        <div className="mb-2">
          <label className="form-label mb-1">Name</label>
          <input
            className={`${
              errors.name && touched.name
                ? "form-control"
                : "success form-control"
            }`}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <div
            style={{ height: "21px" }}
            className={`form-text ${
              errors.name && touched.name ? "visible" : "invisible"
            }`}
          >
            {errors.name}
          </div>
        </div>
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
        <div className="mb-2">
          <label className="form-label mb-1">Confirm Password</label>
          <input
            className={`${
              errors.confirmPassword && touched.confirmPassword
                ? "form-control"
                : "success form-control"
            }`}
            type="text"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <div
            style={{ height: "21px" }}
            className={`form-text ${
              errors.confirmPassword && touched.confirmPassword
                ? "visible"
                : "invisible"
            }`}
          >
            {errors.confirmPassword}
          </div>
        </div>
        <div>
          <div className="form-check d-flex align-items-center justify-content-between ps-0">
            <div className="form-check-label text-primary">
              I accept terms of privacy policy?
            </div>
            <input
              className="form-check-input"
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>

          <div style={{ height: "21px" }}>
            {errors.isAccepted && !checked && (
              <div className="form-text">{errors.isAccepted}</div>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <Link to="/login" className="text-decoration-none btn btn-secondary">
            Login
          </Link>
          <button type="submit" className="btn btn-info">
            SignUp
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
