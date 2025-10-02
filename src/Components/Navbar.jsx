import React, { useEffect } from "react";
import "./Navbar.css";
import { useState, useContext } from "react";
import { useAuth } from "../Context/AuthContext";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
// import { UserPlus } from "lucide-react";
import logo from "../assets/logo.png";
import SignupModal from "./Signup";
import LoginModal from "./Login";
import { Addtocart } from "../Context/Addtocart";
import { Pointer } from "lucide-react";


const Navbar = () => {
  const nav = useNavigate();
  const { user, signout } = useAuth();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLogin] = useState(false);
  const [menu, setMenu] = useState("home");
  const { cartItems } = useContext(Addtocart);
    useEffect(() => {
  if (user) {
    setLogin(false); 
    setOpen(false);  
  }
}, [user]);
  return (
    <div className="headerNavbar">
      <div className="NavbarWrapper">
        <div className="navbar-logo">
          <img
            onClick={() => nav("/")}
            style={{ backgroundColor: "black" }}
            src={logo}
            alt="navbar-logo"
          />
          <h1>RISEBITES</h1>
        </div>
        <div className="NavbarmenuContainer">
          <ul>
            <Link to={"/"}>
              <li
                onClick={() => setMenu("home")}
                className={menu === "home" ? "active" : ""}
              >
                Home
              </li>
            </Link>
            <Link to={"/menu"}>
              <li
                onClick={() => setMenu("menu")}
                className={menu === "menu" ? "active" : ""}
              >
                Menu
              </li>
            </Link>
            <Link to={"/order"}>
              <li
                onClick={() => setMenu("order")}
                className={menu === "order" ? "active" : ""}
              >
                Order
              </li>
            </Link>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <IoCartOutline
            size={30}
            style={{
              cursor: "pointer",
            }}
            onClick={() => nav("/cart")}
          />
          <CgProfile
            size={28}
            style={{
              cursor: "pointer",
            }}
            onClick={() => nav("/profile")}
          />
          {cartItems.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: 10,
                right: 440,
                background: "red",
                color: "white",
                borderRadius: "50%",
                padding: "2px 6px",
                fontSize: "15px",
                fontWeight: 400,
              }}
            >
              {cartItems.length}
            </span>
          )}
        </div>


        {user ? (
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center"
            }}
          >
            <IoCartOutline
              size={28}
              style={{
                cursor: "pointer",
              }}
              onClick={() => nav("/cart")}
            />
            <CgProfile
              size={28}
              style={{
                cursor: "pointer",
              }}
              onClick={() => nav("/profile")}
            />
            <button 
            style={{
              backgroundColor: "#a59f9f",
              padding: "8px",
              borderRadius: "8px",
              color: "white",
              border: "none",
              cursor: "pointer"
            }}
            onClick={signout}>Logout</button>
            <h4>Hey 👋 {user.firstname}</h4>
          </div>
        ) : (
          <div className="NavbarAuthContainer">
            <ul>
              <li onClick={() => setOpen(true)}>Sign up</li>
              <li onClick={() => setLogin(true)}>Sign in</li>
            </ul>
          </div>
        )}
      </div>
      <SignupModal isOpen={open} onClose={() => setOpen(false)} />
      <LoginModal isOpen={loginOpen} onClose={() => setLogin(false)} />
    </div>
  );
};

export default Navbar;
