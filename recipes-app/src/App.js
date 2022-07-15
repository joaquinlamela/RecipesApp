import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/index";
import RandomRecipes from "./Containers/RandomRecipes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/random" element={<RandomRecipes />} exact />
      </Routes>
    </Router>
  );
}

export default App;
