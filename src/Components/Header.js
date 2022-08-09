import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <h1>Simple Kitchen</h1>
      <span>
        <Link to="/">Home</Link> | <Link to="/browse">Browse</Link> |{" "}
        <Link to="/search">Search</Link>
        {/* | <Link to="/quiz">Quiz</Link> */}
      </span>
    </div>
  );
}

export default Header;
