import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Login from "./pages/LogIn/Login";
import "./App.css";
import Footer from "./components/Footer/Footer.js";
import NotFound from "./pages/404Page/NotFound";
import Home from "./components/HomeComp/Home.js";
import LoginDashboard from "./pages/LoginDashboard/LoginDashboard.js";
// components or pages

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logindashboard" element={<LoginDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="#" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
