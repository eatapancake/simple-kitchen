import React, { useEffect, useState } from "react";

function useRecipeDetail({ id }) {
  const [recipeFetch, setRecipeFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });
  useEffect(() => {
    function decode(results) {
      const decodedResults =
        // const ingredientArr = [];
        // for (let i = 1; i <= 20; i++) {
        //     ingredientArr.push({
        //         name: `item.strIngredient${i}`,
        //         measure: item.strMeasure + i,
        //     })
        // }
        {
          name: results.strMeal,
          image: results.strMealThumb,
          instructions: results.strInstructions,

          //   ingredients: [
          //     { name: item.strIngredient1, measure: item.strMeasure1 },
          //     { name: item.strIngredient2, measure: item.strMeasure2 },
          //     { name: item.strIngredient3, measure: item.strMeasure3 },
          //   ],
          category: results.strCategory,
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
