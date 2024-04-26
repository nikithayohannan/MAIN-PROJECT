import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import Job from "./Components/Job";
function App() {
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Job />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="" element={<Nav />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
