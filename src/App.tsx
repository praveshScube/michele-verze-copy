import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import TheWhy from "./components/MicheleVerze/TheWhy";
import Layout from "./Layout";
import Home from "./components/MicheleVerze/Home";
import TheLife from "./components/MicheleVerze/TheLife";

const App = () => {
  const { pathname } = useLocation()
  return (
    <>
      <Layout pathname={pathname} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-why" element={<TheWhy />} />
        <Route path="/the-life" element={<TheLife />} />
      </Routes>
    </>
  );
};

export default App;
