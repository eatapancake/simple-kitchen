import React from "react";
import { Link } from "react-router-dom";

function RecipeThumbnail({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.name}>
          <Link to={`/recipe/${item.id}`}>
            <img width="200px" src={item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeThumbnail;
