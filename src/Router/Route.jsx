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

const LinkRoute = () => {
  const riseBitemenu = [
    {
      image: "./src/assets/Risbite pictures/fluffymoimoi.jpeg",
      food: "Fluffy Moi Moi",
      price: "N3,200",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/breadandegg.jpeg",
      food: "Bread & Egg",
      price: "N2,800",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/breadandomelet.jpeg",
      food: "Bread & Omelet",
      price: "N3,200",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/beancakesandpap.jpeg",
      food: "Bean Cakes & Pap",
      price: "N5,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/friedriceandchicken.jpeg",
      food: "Fried Rice & Chicken",
      price: "N5,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/plantainandeggsauce.jpeg",
      food: "Plantain & Egg Sauce",
      price: "N2,600",
      addtocart: "Add to cart",
    },
  ];

  const riseBitemenu2 = [
    {
      image: "./src/assets/Risbite pictures/baconandegg.jpeg",
      food: "Bacon, Juice, and Egg",
      price: "N2,200",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/breadandeggandtea.jpeg",
      food: "Bread & Egg",
      price: "N2,800",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/breaddoughnutegg.jpeg",
      food: "Bread & Doughnut & Egg",
      price: "N2,500",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/juiceandegg.jpeg",
      food: "Juice and Egg",
      price: "N4,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/Juicesandwichandegg.jpeg",
      food: "Juice, Sandwich, and Egg",
      price: "N4,500",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/pancakessausageegg.jpeg",
      food: "Pancake, Sausage & Egg",
      price: "N2,800",
      addtocart: "Add to cart",
    },
  ];

  const riseBitemenu3 = [
    {
      image: "./src/assets/Risbite pictures/riceandveges.jpeg",
      food: "Rice and Veges",
      price: "N3,700",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/sausageandchinchin.jpeg",
      food: "Sausage and Plantain",
      price: "N2,100",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/sausagebeansbread.jpeg",
      food: "Sausage, Beans, and Bread",
      price: "N3,400",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/teaeggandbread.jpeg",
      food: "Tea, Egg, and Bread",
      price: "N6,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/teaeggbread.jpeg",
      food: "Tea, Egg, and Bread",
      price: "N4,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/yamporridge.jpeg",
      food: "Yam Porridge",
      price: "N3,800",
      addtocart: "Add to cart",
    },
  ];

  const riseBitemenu4 = [
    {
      image: "./src/assets/Risbite pictures/breadandegg.jpeg",
      food: "Bread and Egg",
      price: "N3,100",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/beansandplantain.jpeg",
      food: "Beans and Plantain",
      price: "N2,900",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/breadegg.jpeg",
      food: "Bread & Egg",
      price: "N3,700",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/riceandsauce.jpeg",
      food: "Rice and Sauce",
      price: "N5,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/friedriceandchicken.jpeg",
      food: "Fried Rice & Chicken",
      price: "N5,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/sausagebeansbread.jpeg",
      food: "Sausage, Breans, and Bread",
      price: "N2,600",
      addtocart: "Add to cart",
    },
  ];

  const riseBitemenu5 = [
    {
      image: "./src/assets/Risbite pictures/smoothie.jpeg",
      food: "Smoothie",
      price: "N1500",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/whitecoffee.jpeg",
      food: "White Coffee",
      price: "N1,800",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/blackcoffee.jpeg",
      food: "Black Coffee",
      price: "N1,200",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/bevearage1.jpeg",
      food: "Parfait Plus",
      price: "N5,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/carameltea.jpeg",
      food: "Caramel Tea",
      price: "N3,000",
      addtocart: "Add to cart",
    },

    {
      image: "./src/assets/Risbite pictures/juice.jpeg",
      food: "Juice",
      price: "N2,600",
      addtocart: "Add to cart",
    },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginModal />} />
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
    </Router>
  );
};

export default LinkRoute;
