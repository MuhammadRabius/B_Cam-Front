import React, { lazy } from "react";
import Header from "./components/Header/Header.js";

// components or pages
const Home = lazy(() => import("./pages/homepage/Home.js"));

const App = () => {
  return (
    <>
      <Header>
        <Home />
      </Header>
    </>
  );
};

export default App;
