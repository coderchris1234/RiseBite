// // src/Components/Navbar.jsx

// import { RiMenu3Line, RiCloseLine } from "react-icons/ri"; // 🌟 Import new icons

// const Navbar = () => {
//     // ... existing states: nav, user, signout, open, loginOpen, menu
    
//     // 🌟 New state for the mobile/tablet menu visibility
//     const [isMenuOpen, setIsMenuOpen] = useState(false); 
    
//     // ... existing useEffect ...

//     return (
//         <div className="headerNavbar">
//             <div className="NavbarWrapper">
//                 <div className="navbar-logo">
//                     {/* ... logo code ... */}
//                 </div>

//                 {/* 🌟 Mobile Menu Toggle Button */}
//                 <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                     {isMenuOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
//                 </div>

//                 {/* 🌟 Main Nav/Auth Container (Desktop/Tablet default) */}
//                 <div className="NavbarmenuContainer">
//                     {/* ... Existing Nav Links (Home, Menu, Order) ... */}
//                 </div>

//                 {/* 🌟 Auth/User Container (Desktop/Tablet default) */}
//                 {user ? (
//                     <div className="NavbarAuthContainer"> 
//                         {/* ... Existing User/Cart/Logout buttons (give it a class) ... */}
//                         <div className="user-info"> 
//                             <h4>Hey 👋 {user.firstname}</h4>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="NavbarAuthContainer">
//                         {/* ... Existing Sign up / Sign in buttons ... */}
//                     </div>
//                 )}
//             </div>

//             {/* 🌟 Conditionally render the fly-out menu for mobile/tablet */}
//             {isMenuOpen && (
//                 <div className={`mobile-flyout-menu ${isMenuOpen ? 'open' : ''}`}>
//                     <div className="flyout-links">
//                         {/* Copy the NavbarmenuContainer links here */}
//                         <Link to={"/"} onClick={() => { setMenu("home"); setIsMenuOpen(false); }}>
//                             <li className={menu === "home" ? "active" : ""}>Home</li>
//                         </Link>
//                         <Link to={"/menu"} onClick={() => { setMenu("menu"); setIsMenuOpen(false); }}>
//                             <li className={menu === "menu" ? "active" : ""}>Menu</li>
//                         </Link>
//                         <Link to={"/order"} onClick={() => { setMenu("order"); setIsMenuOpen(false); }}>
//                             <li className={menu === "order" ? "active" : ""}>Order</li>
//                         </Link>
                        
//                         {/* Copy the Auth/User controls here */}
//                         {user ? (
//                             <>
//                                 <li onClick={() => { nav("/cart"); setIsMenuOpen(false); }}><IoCartOutline size={24} /> Cart</li>
//                                 <li onClick={() => { nav("/profile"); setIsMenuOpen(false); }}><CgProfile size={24} /> Profile</li>
//                                 <li onClick={() => { signout(); setIsMenuOpen(false); }}>Logout</li>
//                             </>
//                         ) : (
//                             <>
//                                 <li onClick={() => { setOpen(true); setIsMenuOpen(false); }}>Sign up</li>
//                                 <li onClick={() => { setLogin(true); setIsMenuOpen(false); }}>Sign in</li>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             )}

//             <SignupModal isOpen={open} onClose={() => setOpen(false)} />
//             <LoginModal isOpen={loginOpen} onClose={() => setLogin(false)} />
//         </div>
//     );
// };

// export default Navbar;