import React from "react";

function RecipeDetail({ data }) {
  const { name, image, instructions, category, ingredients } = data;

  return (
    <div>
      <h1>{name}</h1>
      <p>category: {category}</p>
      <h3>ingredients</h3>
      <ul>
        {ingredients.map((item, i) => {
          return (
            <li key={item + i}>
              {item.measure} - {item.name}
            </li>
          );
        })}
      </ul>
      <img width="400px" src={image} alt={name} />
      <h3>Instructions</h3>
      <p>{instructions}</p>
    </div>
  );
}

export default RecipeDetail;
