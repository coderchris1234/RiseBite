import React, { useState } from "react";
import "./Header.css";
import locate from '../../assets/locate.png'
import arrow from '../../assets/arrow.png'
import Modal from "../Header/Modal";

const Header = () => {
  const [modal, setModal] =useState(false)
  return (
    <div className="Header-container">
      <div className="headerContentWrapper">
        <div className="headerContent">
          <div className="content">
            <p className="headerPara">Start Your Day Right</p>
            <p>Discover delicious breakfast options delivered to your door!</p>
          </div>


          <div className="locationBody">
            <div className="inputWrapper">
              <img src={locate}/>
              <input type="text" placeholder="What's your delivery address?" />
            </div>
            <div className="locationWrapper">

              <button onClick={()=>setModal(!modal)}>
                <img src={arrow} alt="" />
                Use current location
                </button>
               {modal && <Modal setModal={setModal} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
