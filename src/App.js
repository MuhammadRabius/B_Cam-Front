import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import NotFound from "./components/page/404Page/NotFound.js";
import Login from "./pages/LogIn/Login";
import "./App.css";
// components or pages
const Home = lazy(() => import("./pages/Homepage/Home.js"));

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="#" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
