import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import QuizIntro from "../Components/QuizIntro";
import FoodPreview from "../Components/FoodPreview";
import useCategory from "../Custom Hooks/use-category";
import foodRegions from "../Data/food-regions";
import foodTypes from "../Data/food-types";
import LoadingSpinner from "../common/loading-spinner";

function Home({ searchResult }) {
  const generateRandom = (myArr) => {
    const randomNum = Math.floor(Math.random() * myArr.length);
    console.log(myArr[randomNum]);
    return myArr[randomNum];
  };

  const [category] = useState(generateRandom(foodTypes));
  const [region] = useState(generateRandom(foodRegions));

  // const category = "Chicken";
  // const region = "Chinese";
  const [isLoading, errorMessage, data] = useCategory(category, "c=");
  const [isLoading2, errorMessage2, data2] = useCategory(region, "a=");
  console.log("hello");

  let content = <div></div>;
  if (data && data2) {
    content = (
      <div>
        <FoodPreview title={category} foodCategory={true} data={data} />
        <FoodPreview title={region} foodCategory={false} data={data2} />
      </div>
    );
  } else if (isLoading || isLoading2) content = <LoadingSpinner />;
  else content = <div>{errorMessage}</div>;

  return (
    <div>
      <SearchBar searchResult={searchResult} />
      {/* <QuizIntro /> */}
      {content}
    </div>
  );
}

export default Home;
