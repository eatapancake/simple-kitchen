import { useEffect, useState } from "react";

function useCategory(category, filterBy, page) {
  const [fetchCategory, setFetchCategory] = useState({
    isLoading: true,
    errorMessage: null,
    data: null,
    isNext: false,
  });

  useEffect(() => {
    let next = false;
    // let isCancelled = false;

    const decode = (result) => {
      const decodedResult = result.slice(page, page + 4).map((item) => {
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
        console.log(json.meals.slice(page + 4, page + 5)[0]);
        if (json.meals.slice(page + 4, page + 5)[0] === undefined) {
          console.log("Stop");
          next = true;
        }

        setFetchCategory({
          isLoading: false,
          errorMessage: null,
          data: decode(json.meals),
          isNext: next,
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
  }, [category, page]);

  const { isLoading, errorMessage, data, isNext } = fetchCategory;
  return [isLoading, errorMessage, data, isNext];
}

export default useCategory;
