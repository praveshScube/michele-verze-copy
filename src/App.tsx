import React from "react";
import { Routes, Route } from "react-router-dom";
import TheWhy from "./components/MicheleVerze/TheWhy";
import Layout from "./Layout";
import Home from "./components/MicheleVerze/Home";
import TheLife from "./components/MicheleVerze/TheLife";

const App = () => {
  
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-why" element={<TheWhy />} />
        <Route path="/the-life" element={<TheLife />} />
      </Routes>
    </>
  );
};

export default App;
