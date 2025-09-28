import React from "react";
import "./Navbar.css";
import { useState } from "react";
// import { UserPlus } from "lucide-react";
import logo from '../assets/logo.png'
import SignupModal from "./Signup";

const Navbar = () => {
   const [open, setOpen] = useState(false);
    const [menu, setMenu] =useState('home')
  return (
    <div className="headerNavbar">
      <div className="NavbarWrapper">
        <div className="navbar-logo">
        <img style={{backgroundColor: "black"}} src={logo} alt="navbar-logo" />
        <h1>RISEBITES</h1>
        </div>
        <div className="NavbarmenuContainer">
          <ul>
            <li onClick={()=> setMenu('home')} className={menu === 'home' ? 'active': ""}>Home</li>
            <li onClick={()=> setMenu('menu')} className={menu === 'menu' ? 'active': ""}>Menu</li>
            <li onClick={()=> setMenu('order')} className={menu === 'order' ? 'active': ""}>Order</li>
          </ul>
        </div>

        <div className="NavbarAuthContainer">
          <ul>
            <li onClick={()=> setOpen(true)} >Sign up</li>
            <li>Sign in</li>
          </ul>
        </div>
      </div>
           <SignupModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Navbar;
