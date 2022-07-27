import React from "react";

function RecipeDetail({ data }) {
  const { name, image, instructions, category, ingredients } = data;

  return (
    <div>
      <h1>{name}</h1>
      <p>category: {category}</p>
      <ul>
        {ingredients.map((item) => {
          return (
            <li>
              {item.name} - {item.measure}
            </li>
          );
        })}
      </ul>
      <img width="400px" src={image} alt={name} />
      <p>{instructions}</p>
    </div>
  );
}

export default RecipeDetail;
