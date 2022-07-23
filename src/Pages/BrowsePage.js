import React from "react";
import FoodItem from "../Components/FoodItem";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import foodTypes from "../Data/food-types";
import foodRegions from "../Data/food-regions";

function BrowsePage() {
  return (
    <div className="App">
      <h2>Browse Recipes</h2>
      <span style={{ display: "flex" }}>
        <p>Filter by:</p>
        <DropdownButton id="dropdown-basic-button" title="Food Type">
          <div style={{ height: "300px", overflow: "auto" }}>
            {foodTypes.map((item) => (
              <Dropdown.Item>{item}</Dropdown.Item>
            ))}{" "}
          </div>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Region">
          <div style={{ height: "300px", overflow: "auto" }}>
            {" "}
            {foodRegions.map((item) => (
              <Dropdown.Item>{item}</Dropdown.Item>
            ))}
          </div>
        </DropdownButton>
      </span>
      <FoodItem />
    </div>
  );
}

export default BrowsePage;
