import React from 'react'
import './Footer.css'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";


function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <p>RISEBITE</p>
            <p>
                Bringing your favorite meals closer to you — fresh, fast, and reliable. Order with ease and enjoy delicious food delivered straight to your door.
            </p>
            <div className="footer-social-icons">
               <div className="icons">
                 <CiFacebook/>
                <CiTwitter/>
                <CiLinkedin/>
               </div>
               
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>order</li>
                <li>proflie</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+234-902-6161-344</li>
                <li>contact@RiseBite.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright {new Date().getFullYear()} © RiseBite.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
