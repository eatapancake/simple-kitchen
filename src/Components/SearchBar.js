import React, { useState } from "react";

function SearchBar({ searchResult }) {
  const [userInput, setUserInput] = useState("");
  const onUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    searchResult(userInput);

    //To Do
    //
    //  GO to.... ----> Search Recipe Page
  };

  return (
    <div id="Search">
      <h2>Already Decided?</h2>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Find your recipe here"
          onChange={onUserInputChange}
          value={userInput}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default SearchBar;
