import React from "react";

function RecipeDetail({ data }) {
  const { name, image, instructions, category } = data;

  return (
    <div>
      <h1>{name}</h1>
      <p>{category}</p>
      <img width="400px" src={image} alt={name} />
      <p>{instructions}</p>
    </div>
  );
}

export default RecipeDetail;
