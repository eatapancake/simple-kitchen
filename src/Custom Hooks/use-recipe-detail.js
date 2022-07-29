import React, { useEffect, useState } from "react";

function useRecipeDetail({ id }) {
  const [recipeFetch, setRecipeFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });
  useEffect(() => {
    function decode(results) {
      const ingredientArr = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;
        if (results[ingredient] !== "")
          ingredientArr.push({
            name: results[ingredient],
            measure: results[measure],
          });
      }

      const decodedResults = {
        name: results.strMeal,
        image: results.strMealThumb,
        instructions: results.strInstructions,

        category: results.strCategory,
        ingredients: ingredientArr,
      };

      return decodedResults;
    }

    async function getRecipe() {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(url);
        const json = await response.json();

        setRecipeFetch({
          isLoading: false,
          errorMessage: "",
          data: decode(json.meals[0]),
        });
      } catch {}
    }
    getRecipe();
  }, [id]);

  const { isLoading, errorMessage, data } = recipeFetch;
  return [isLoading, errorMessage, data];
}

export default useRecipeDetail;
