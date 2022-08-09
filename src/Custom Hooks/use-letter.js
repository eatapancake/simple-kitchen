import { useEffect, useState } from "react";

function useLetter(letter = "a") {
  const [fetchLetter, setFetchLetter] = useState({
    isLoading: true,
    errorMessage: null,
    data: null,
  });

  useEffect(() => {
    const decode = (result) => {
      const decodedResult = result.slice(0, 4).map((item) => {
        return {
          name: item.strMeal,
          image: item.strMealThumb,
          id: item.idMeal,
        };
      });
      return decodedResult;
    };
    async function getLetter() {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;

        const response = await fetch(url);
        const json = await response.json();

        setFetchLetter({
          isLoading: false,
          errorMessage: null,
          data: decode(json.meals),
        });
      } catch {
        console.log("use-letter - ERROR ");
      }
    }
    getLetter();
  }, [letter]);

  const { isLoading, errorMessage, data } = fetchLetter;
  return [isLoading, errorMessage, data];
}

export default useLetter;
