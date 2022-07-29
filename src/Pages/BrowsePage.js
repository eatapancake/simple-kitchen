import React, { useState } from "react";
import FoodItem from "../Components/FoodItem";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import foodTypes from "../Data/food-types";
import foodRegions from "../Data/food-regions";
import useCategoy from "../Custom Hooks/use-category";
import RecipeThumbnail from "../Components/RecipeThumbnail";

function BrowsePage() {
  const [filterOption, setFilterOption] = useState("Filter by");
  const [myFilter, setMyFilter] = useState({ name: "", type: "" });
  const [isLoading, errorMessage, data] = useCategoy(
    myFilter.name,
    myFilter.type
  );
  console.log(myFilter.name);
  console.log(data);
  const foodTypeFilter = (
    <DropdownButton
      id="dropdown-basic-button"
      title={foodTypes[0]}
      onSelect={(e) => setMyFilter({ name: e, type: "c=" })}
    >
      <div style={{ height: "300px", overflow: "auto" }}>
        {foodTypes.map((item) => (
          <Dropdown.Item eventKey={item} key={item}>
            {item}
          </Dropdown.Item>
        ))}{" "}
      </div>
    </DropdownButton>
  );

  const foodRegionFilter = (
    <DropdownButton
      id="dropdown-basic-button"
      title={foodRegions[0]}
      onSelect={(e) => setMyFilter({ name: e, type: "a=" })}
    >
      <div style={{ height: "300px", overflow: "auto" }}>
        {" "}
        {foodRegions.map((item) => (
          <Dropdown.Item eventKey={item} key={item}>
            {item}
          </Dropdown.Item>
        ))}
      </div>
    </DropdownButton>
  );

  const filterBy = (
    <DropdownButton
      id="dropdown-basic-button"
      title={filterOption}
      onSelect={(e) => setFilterOption(e)}
    >
      <Dropdown.Item eventKey="Food Type">Food Type</Dropdown.Item>
      <Dropdown.Item eventKey="Region">Region</Dropdown.Item>
    </DropdownButton>
  );
  return (
    <div className="App">
      <h2>Browse Recipes</h2>
      <span style={{ display: "flex" }}>
        <p>Filter by:</p>
        {filterBy}
        {filterOption === "Food Type" && foodTypeFilter}
        {filterOption === "Region" && foodRegionFilter}
        {data && <RecipeThumbnail data={data} />}
      </span>
      {/* <FoodItem /> */}
    </div>
  );
}

export default BrowsePage;
