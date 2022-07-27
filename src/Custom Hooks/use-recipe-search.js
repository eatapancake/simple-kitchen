import React, { useEffect, useState } from "react";

function useRecipeSearch(slug) {
  const [recipeFetch, setRecipeFetch] = useState({
    isLoading: true,
    errorMessage: "",
    data: null,
  });

  useEffect(() => {
    const decode = (results) => {
      let end = 7;
      if (results.length < 7) {
        end = results.length;
      }
      console.log(results.length);
      const decodedResults = results.slice(0, end).map((item) => {
        return {
          name: item.strMeal,
          image: item.strMealThumb,
          id: item.idMeal,
        };
      });
      return decodedResults;
    };

    async function getRecipe() {
      try {
        const search = slug;
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        // console.log(json.meals[0]);

        setRecipeFetch({
          isLoading: false,
          errorMessage: "",
          data: decode(json.meals),
        });
      } catch {
        console.log("Something went Wrong");
      }
    }
    getRecipe();
  }, [slug]);
  const { isLoading, errorMessage, data } = recipeFetch;
  return [isLoading, errorMessage, data];
}
export default useRecipeSearch;

//
