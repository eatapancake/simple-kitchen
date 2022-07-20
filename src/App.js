import { useState } from "react";
import "./App.css";
import FetchApi from "./fetch-api";
import FetchMealdb from "./FetchMealdb";

import Home from "./Pages/Home";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const searchResult = (input) => {
    setSearchValue(input);
  };
  return (
    <div className="App">
      {/* <p>Hello</p> */}
      {/* <FetchApi /> */}
      {/* <FetchMealdb /> */}
      <Home searchResult={searchResult} />

      <p>{searchValue}</p>
    </div>
  );
}

export default App;
