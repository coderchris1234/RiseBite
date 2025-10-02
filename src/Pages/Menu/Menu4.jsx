import React, { useContext } from "react";
import "./Menu.css";
import { Addtocart } from "../../Context/Addtocart.jsx";
const Menu4 = ({ props }) => {
  const { addToCart } = useContext(Addtocart);
  return (
    <>
      <section className="menu_food">
        <div className="menu_name">
          <h1>Appetizers</h1>
          <h3>Choose from our mouth-watering appetizers made for you</h3>
        </div>
        <article className="blocks">
          {props.map((prop, index) => (
            <div className="food1" key={index}>
              <img src={prop.image} alt="" className="img_menu" />
              <section className="food_price_add">
                <div className="food_price">
                  <h3>{prop.food}</h3>
                  <h2>{prop.price}</h2>
                </div>
                <div>
                  <button className="btn_add" onClick={() => addToCart(prop)}>
                    {prop.addtocart}
                  </button>
                </div>
              </section>
            </div>
          ))}
          <hr></hr>
        </article>
      </section>
    </>
  );
};

export default Menu4;
