import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="App row d-flex justify-content-center align-items-center">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
};

export default App;
