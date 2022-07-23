import React from "react";
import placeholder from "../images/img-placeholder.jpg";

function FoodItem() {
  //src, alt, title
  return (
    <div>
      <a href="">
        <img width="200" src={placeholder} alt="placeholder" />
        <h3>Hamburger</h3>
      </a>
    </div>
  );
}

export default FoodItem;
