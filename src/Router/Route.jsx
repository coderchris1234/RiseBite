import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Pages/HomePage/Home";
import Cart from "../Pages/Cart/Cart";
import Footer from "../Components/Footer";
import LoginModal from "../Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../Pages/ProfilePage/Profile";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/HomePage/OrderPage/Order";

const LinkRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginModal />}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />}/>
        <Route path="/order" element={<Order />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default LinkRoute;
