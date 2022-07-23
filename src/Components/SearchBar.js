import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ searchResult, header = "Already Decided?" }) {
  const [userInput, setUserInput] = useState("");
  const onUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchResult(userInput);
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
        <Link to="/search">
          <input type="submit"></input>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
