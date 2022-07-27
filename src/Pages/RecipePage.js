import React from "react";
import { useParams } from "react-router-dom";
import RecipeDetail from "../Components/RecipeDetail";
import useRecipeDetail from "../Custom Hooks/use-recipe-detail";

function RecipePage() {
  const id = useParams();

  const [isLoading, errorMessage, data] = useRecipeDetail(id);
  console.log(data);
  return (
    <div>
      <h2> Recipe Page</h2>
      <p>Start to Cook</p>
      {data && <RecipeDetail data={data} />}
    </div>
  );
}

export default RecipePage;
