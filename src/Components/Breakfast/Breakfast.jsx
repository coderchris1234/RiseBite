import React from "react";
import "./Breakfast.css";
import food1 from "../../assets/FriedRice.jpg";
import food2 from "../../assets/BreadEgg.jpg";
import food3 from "../../assets/BreadOmelet.jpg";
import food4 from "../../assets/Smoothie.jpg";
import food5 from "../../assets/CameralTea.jpg";
import food6 from "../../assets/WhiteCoffee.jpg";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Breakfast = () => {
  const { user } = useAuth();
  const nav = useNavigate();
  const foodImages = [
    { id: 1, name: "Fried rice & chicken", Image: food1 },
    { id: 2, name: "Bread & egg", Image: food2 },
    { id: 3, name: "bread, omelet & hot dog", Image: food3 },
    { id: 4, name: "Smoothie", Image: food4 },
    { id: 5, name: "Caramel tea", Image: food5 },
    { id: 6, name: "White coffee", Image: food6 },
  ];

  return (
    <>
      <h2
        style={{
          marginTop: "50px",
          marginBottom: "20px",
          fontWeight: "700",
          fontSize: "37PX",
          lineHeight: "44px",
        }}
      >
        Fresh Breakfast Section
      </h2>
      <span>Choose from our mouth-watering breakfast items.</span>
      <div className="foodContainer">
        {foodImages.map((food) => (
          <div key={food.id} className="food">
            <img src={food.Image} alt={food.Image} />
            <p>{food.name}</p>
          </div>
        ))}
      </div>
      {user ? (
        <button
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingInline: "20px",
            borderRadius: "8px",
            border: "1px solid black",
            color: "black",
            fontWeight: "500",
            lineHeight: "22px",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={() => nav("/menu")}
        >
          Order Now
        </button>
      ) : (
        <button
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingInline: "20px",
            borderRadius: "8px",
            border: "1px solid black",
            color: "black",
            fontWeight: "500",
            lineHeight: "22px",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onClick={() => toast.warning("you must be signed in to place order")}
        >
          Order Now
        </button>
      )}
    </>
  );
};

export default Breakfast;
