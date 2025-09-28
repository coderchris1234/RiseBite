import React from "react";
import "./Modal.css";
import cancel from '../../assets/Multiply.png'
import Geo from '../../assets/geo.png'

const Modal = ({ setModal}) => {
  return (
    <div className="modal-overlay" >
      <div className="modal-content">
        <img 
        onClick={()=> setModal(false)}
        style={{cursor: "pointer"}} src={cancel} alt="" />
        <div className="location-content">
           <p>Your location is within our reach</p> 
           <img src={Geo} alt="" />
           <p>And it has been saved</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
