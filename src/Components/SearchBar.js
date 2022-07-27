import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ searchResult, header = "Already Decided?" }) {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();
  const onUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // searchResult(userInput);
    // setUserInput("cow");
    navigate(`/search/${userInput}`);

    console.log("search bar...");
  };

  return (
    <div id="Search" className="App">
      <h2>{header}</h2>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Find your recipe here"
          onChange={onUserInputChange}
          value={userInput}
        ></input>

        <input type="submit" value="Search"></input>
      </form>
    </div>
  );
}

export default SearchBar;
