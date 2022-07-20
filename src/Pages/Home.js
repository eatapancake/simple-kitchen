import React from "react";
import SearchBar from "../Components/SearchBar";

import QuizIntro from "../Components/QuizIntro";
import FoodPreview from "../Components/FoodPreview";

function Home({ searchResult }) {
  return (
    <div>
      <SearchBar searchResult={searchResult} />
      <QuizIntro />
      <FoodPreview title="Chicken" foodCategory={true} />
      <FoodPreview title="Chinese" foodCategory={false} />
    </div>
  );
}

export default Home;
