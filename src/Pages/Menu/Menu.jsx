import React, { useContext } from "react";
import "./Menu.css";
// import Menu2 from "./Menu2";
import { Addtocart } from "../../Context/Addtocart.jsx";

const Menu = ({ props }) => {
  const { addToCart } = useContext(Addtocart);

  return (
    <>
      <section className="menu_header">
        <div className="menu_header_texts">
          <h2>Menu</h2>
          <h3>
            Welcome to our menu, where you get varieties of
            <br></br>
            dishes made specially for you.
          </h3>
        </div>
      </section>

      <section className="menu_food">
        <div className="menu_name">
          <h1>Breakfast Dishes</h1>
          <h3>Choose from our mouth-watering breakfast items</h3>
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
      {/* <Menu2 /> */}
    </>
  );
};

export default Menu;
