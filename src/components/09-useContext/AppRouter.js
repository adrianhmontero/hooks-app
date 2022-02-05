import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import HomePage from "./HomePage";
import Login from "./Login";
import Navbar from "./Navbar";

const AppRouter = () => {
  return (
    <Router>
      <div>
          <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
