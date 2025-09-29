import React from "react";
import { useAuth } from "../../Context/AuthContext";
import "./Geo.css";
import map from "../../assets/map.png";

const Geo = () => {
  const { user } = useAuth();
  return (
  <>
  {
    user ? (
       <div className='geo-container'>
      <h2>Available Locations</h2>
      <p>Get to know our branches near you</p>
      <img src={map} alt="" />
    </div>
    ) : null
  }
  </>
  );
};

export default Geo;
