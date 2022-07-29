import { useEffect, useState } from "react";

function useCategory(category, filterBy) {
  const [fetchCategory, setFetchCategory] = useState({
    isLoading: true,
    errorMessage: null,
    data: null,
  });

  useEffect(() => {
    // let isCancelled = false;

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
    async function getCategory() {
      try {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${filterBy}${category}`;

        const response = await fetch(url);
        const json = await response.json();
        // console.log(decode(json.meals));
        console.log("hi");
        // if (!isCancelled) {
        setFetchCategory({
          isLoading: false,
          errorMessage: null,
          data: decode(json.meals),
        });
        // }
      } catch {
        console.log("use-category - ERROR ");
      }
    }
    getCategory();
    return () => {
      //   isCancelled = true;
    };
  }, [category]);

  const { isLoading, errorMessage, data } = fetchCategory;
  return [isLoading, errorMessage, data];
}

export default useCategory;
