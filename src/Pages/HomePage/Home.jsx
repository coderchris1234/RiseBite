import React from "react";
import Header from "../../Components/Header/Header";
import Geo from "../../Components/Geo/Geo";
import Customer from '../../Components/Customer/Customer'
import Discount from "../../Components/Discount/Discount";
import Breakfast from "../../Components/Breakfast/Breakfast";

const Home = () => {
  return (
    <div>
       <Header />
      <div style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Breakfast />
        <Geo />
        <Customer />
        <Discount />
      </div>
    </div>
  );
};

export default Home;
