import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Pages/HomePage/Home";
import Cart from "../Pages/Cart/Cart";
import Footer from "../Components/Footer";
import LoginModal from "../Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "../Pages/ProfilePage/Profile";
import Menu from "../Pages/Menu/Menu";
import Menu2 from "../Pages/Menu/Menu2";
import Menu3 from "../Pages/Menu/Menu3";
import Menu4 from "../Pages/Menu/Menu4";
import Menu5 from "../Pages/Menu/Menu5";
import Order from "../Pages/HomePage/OrderPage/Order";
import VerifyEmail from "../Components/VerifyEmail";

const LinkRoute = ({ openLoginModal }) => {
  const riseBitemenu = [
    {
      id: 1,
      image: "./src/assets/Risbite pictures/fluffymoimoi.jpeg",
      food: "Fluffy Moi Moi",
      price: 3200,
      addtocart: "Add to cart",
    },
    {
      id: 2,
      image: "./src/assets/Risbite pictures/breadandegg.jpeg",
      food: "Bread & Egg",
      price: 2800,
      addtocart: "Add to cart",
    },
    {
      id: 3,
      image: "./src/assets/Risbite pictures/breadandomelet.jpeg",
      food: "Bread & Omelet",
      price: 3200,
      addtocart: "Add to cart",
    },
    {
      id: 4,
      image: "./src/assets/Risbite pictures/beancakesandpap.jpeg",
      food: "Bean Cakes & Pap",
      price: 5000,
      addtocart: "Add to cart",
    },
    {
      id: 5,
      image: "./src/assets/Risbite pictures/friedriceandchicken.jpeg",
      food: "Fried Rice & Chicken",
      price: 5000,
      addtocart: "Add to cart",
    },
    {
      id: 6,
      image: "./src/assets/Risbite pictures/plantainandeggsauce.jpeg",
      food: "Plantain & Egg Sauce",
      price: 2600,
      addtocart: "Add to cart",
    },
  ];

  const riseBitemenu2 = [
    {
      id: 7,
      image: "./src/assets/Risbite pictures/baconandegg.jpeg",
      food: "Bacon, Juice, and Egg",
      price: 2200,
      addtocart: "Add to cart",
    },
    {
      id: 8,
      image: "./src/assets/Risbite pictures/breadandeggandtea.jpeg",
      food: "Bread & Egg",
      price: 2800,
      addtocart: "Add to cart",
    },
    {
      id: 9,
      image: "./src/assets/Risbite pictures/breaddoughnutegg.jpeg",
      food: "Bread & Doughnut & Egg",
      price: 2500,
      addtocart: "Add to cart",
    },
    {
      id: 10,
      image: "./src/assets/Risbite pictures/juiceandegg.jpeg",
      food: "Juice and Egg",
      price: 4000,
      addtocart: "Add to cart",
    },
    {
      id: 11,
      image: "./src/assets/Risbite pictures/Juicesandwichandegg.jpeg",
      food: "Juice, Sandwich, and Egg",
      price: 4500,
      addtocart: "Add to cart",
    },
    {
      id: 12,
      image: "./src/assets/Risbite pictures/pancakessausageegg.jpeg",
      food: "Pancake, Sausage & Egg",
      price: 2800,
      addtocart: "Add to cart",
    },
  ];

  const riseBitemenu3 = [
    {
      id: 13,
      image: "./src/assets/Risbite pictures/riceandveges.jpeg",
      food: "Rice and Veges",
      price: 3700,
      addtocart: "Add to cart",
    },
    {
      id: 14,
      image: "./src/assets/Risbite pictures/sausageandchinchin.jpeg",
      food: "Sausage and Plantain",
      price: 2100,
      addtocart: "Add to cart",
    },
    {
      id: 15,
      image: "./src/assets/Risbite pictures/sausagebeansbread.jpeg",
      food: "Sausage, Beans, and Bread",
      price: 3400,
      addtocart: "Add to cart",
    },
    {
      id: 16,
      image: "./src/assets/Risbite pictures/teaeggandbread.jpeg",
      food: "Tea, Egg, and Bread",
      price: 6000,
      addtocart: "Add to cart",
    },
    {
      id: 17,
      image: "./src/assets/Risbite pictures/teaeggbread.jpeg",
      food: "Tea, Egg, and Bread",
      price: 4000,
      addtocart: "Add to cart",
    },
    {
      id: 18,
      image: "./src/assets/Risbite pictures/yamporridge.jpeg",
      food: "Yam Porridge",
      price: 3800,
      addtocart: "Add to cart",
    },
  ];

  const riseBitemenu4 = [
    {
      id: 19,
      image: "./src/assets/Risbite pictures/breadandegg.jpeg",
      food: "Bread and Egg",
      price: 3100,
      addtocart: "Add to cart",
    },
    {
      id: 20,
      image: "./src/assets/Risbite pictures/beansandplantain.jpeg",
      food: "Beans and Plantain",
      price: 2900,
      addtocart: "Add to cart",
    },
    {
      id: 21,
      image: "./src/assets/Risbite pictures/breadegg.jpeg",
      food: "Bread & Egg",
      price: 3700,
      addtocart: "Add to cart",
    },
    {
      id: 22,
      image: "./src/assets/Risbite pictures/riceandsauce.jpeg",
      food: "Rice and Sauce",
      price: 5000,
      addtocart: "Add to cart",
    },
    {
      id: 23,
      image: "./src/assets/Risbite pictures/friedriceandchicken.jpeg",
      food: "Fried Rice & Chicken",
      price: 5000,
      addtocart: "Add to cart",
    },
    {
      id: 24,
      image: "./src/assets/Risbite pictures/sausagebeansbread.jpeg",
      food: "Sausage, Beans, and Bread",
      price: 2600,
      addtocart: "Add to cart",
    },
  ];

  const riseBitemenu5 = [
    {
      id: 25,
      image: "./src/assets/Risbite pictures/smoothie.jpeg",
      food: "Smoothie",
      price: 1500,
      addtocart: "Add to cart",
    },
    {
      id: 26,
      image: "./src/assets/Risbite pictures/whitecoffee.jpeg",
      food: "White Coffee",
      price: 1800,
      addtocart: "Add to cart",
    },
    {
      id: 27,
      image: "./src/assets/Risbite pictures/blackcoffee.jpeg",
      food: "Black Coffee",
      price: 1200,
      addtocart: "Add to cart",
    },
    {
      id: 28,
      image: "./src/assets/Risbite pictures/bevearage1.jpeg",
      food: "Parfait Plus",
      price: 5000,
      addtocart: "Add to cart",
    },
    {
      id: 29,
      image: "./src/assets/Risbite pictures/carameltea.jpeg",
      food: "Caramel Tea",
      price: 3000,
      addtocart: "Add to cart",
    },
    {
      id: 30,
      image: "./src/assets/Risbite pictures/juice.jpeg",
      food: "Juice",
      price: 2600,
      addtocart: "Add to cart",
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/menu"
          element={
            <>
              {" "}
              <Menu props={riseBitemenu} />
              <Menu2 props={riseBitemenu2} />
              <Menu3 props={riseBitemenu3} />
              <Menu4 props={riseBitemenu4} />
              <Menu5 props={riseBitemenu5} />
            </>
          }
        />

        {/* <Menu props={riseBitemenu} /> */}
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </>
  );
};

export default LinkRoute;
