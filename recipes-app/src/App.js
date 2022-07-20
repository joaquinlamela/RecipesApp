import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/index";
import RandomRecipes from "./Containers/RandomRecipes";
import Navbar from "./Components/Navbar";
import Contact from "./Containers/Contact";
import Footer from "./Components/Footer";
import Sidebar from "./Components/SideBar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar openSidebar={toggle} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/random" element={<RandomRecipes />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
