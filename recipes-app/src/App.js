import React, { useState } from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/index";
import Navbar from "./Components/Navbar";
import Contact from "./Containers/Contact";
import RecipeDetail from "./Containers/RecipeDetail";
import Footer from "./Components/Footer";
import Sidebar from "./Components/SideBar";
import Recipes from "./Containers/Recipes";

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
        <Route path="/recipes" element={<Recipes />} exact />
        <Route path="/recipe/:id" element={<RecipeDetail />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
