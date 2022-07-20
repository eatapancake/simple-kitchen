import React, { useState } from "react";

function FetchMealdb() {
  const [mealdb, setMealdb] = useState(null);
  const [img, setImg] = useState(null);

  const testing = async (event) => {
    event.preventDefault();
    //Category
    //Beef, Chicken, Dessert, Lamb, Miscellaneous, Pasta, Pork, Seafood,
    // Side, Starter, Vegan, Vegetarian, Breakfast, Goat
    // const url = "https://themealdb.com/api/json/v1/1/categories.php";

    //Area
    //American, British, Canadian, Chinese, Croatian, ...27 items

    const url = "https://themealdb.com/api/json/v1/1/list.php?a=list";

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Bad API Request!!");
      const json = await response.json();
      console.log(json);
      //   setImg(json.categories[13].strCategoryThumb);
    } catch (error) {
      console.log("FAIL DB");
    }
  };
  // const onSearchFormSubmit = async (event) => {
  //     event.preventDefault();

  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error("Bad API request");
  //       }
  //       console.log(pokemonName);
  //       const json = await response.json();
  //       console.log(json);
  //       console.log();
  //       setPokemonData(json);
  //     } catch (error) {
  //       console.error("FAIL");
  //     }
  //   };

  return (
    <div>
      <form onSubmit={testing}>
        {img && <img src={img} alt="food" />}
        <input type="submit" value="submit here"></input>
      </form>
    </div>
  );
}

export default FetchMealdb;
