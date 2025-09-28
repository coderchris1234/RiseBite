import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Pages/HomePage/Home";
import Cart from "../Pages/Cart/Cart";
import Footer from "../Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const LinkRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default LinkRoute;
