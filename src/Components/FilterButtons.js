import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import useCategoy from "../Custom Hooks/use-category";
import foodTypes from "../Data/food-types";
import foodRegions from "../Data/food-regions";
import RecipeThumbnail from "../Components/RecipeThumbnail";
import useLetter from "../Custom Hooks/use-letter";

function FilterButtons() {
  const alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const [filterOption, setFilterOption] = useState("Filter by");
  const [page, setPage] = useState(0);
  const [filterPage, setFilterPage] = useState(0);
  const [myFilter, setMyFilter] = useState({ name: "", type: "" });
  const [isLoading, errorMessage, data, isNext] = useCategoy(
    myFilter.name,
    myFilter.type,
    filterPage
  );
  const [isLoading2, errorMessage2, data2] = useLetter(alpha[page]);

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
  const handleAlphaPage = (type) => {
    if (type === "next") {
      setPage((prev) => prev + 1);
    }
    if (type === "back") {
      setPage((prev) => prev - 1);
    } else return;
  };

  const handlePage = (type) => {
    if (type === "next") setFilterPage((prev) => prev + 4);
    if (type === "back") setFilterPage((prev) => prev - 4);
    // else return;
  };

  return (
    <div>
      {" "}
      <span style={{ display: "flex" }}>
        <p>Filter by:</p>
        {filterBy}
        {filterOption === "Food Type" && foodTypeFilter}
        {filterOption === "Region" && foodRegionFilter}
      </span>
      {data && <RecipeThumbnail data={data} />}
      {data && filterPage !== 0 && (
        <button disabled={isNext} onClick={() => handlePage("back")}>
          ⬅ Back
        </button>
      )}
      {data && (
        <button disabled={isNext} onClick={() => handlePage("next")}>
          Next ➡
        </button>
      )}
      {data === null && data2 && <RecipeThumbnail data={data2} />}
      {data === null && data2 && page !== 0 && (
        <button onClick={() => handleAlphaPage("back")}>⬅ Back</button>
      )}
      {data === null && data2 && page !== alpha.length && (
        <button onClick={() => handleAlphaPage("next")}>Next ➡</button>
      )}
    </div>
  );
}

export default FilterButtons;
