import React from "react";
import SearchBar from "../Components/SearchBar";
import Header from "../Components/Header";
import QuizIntro from "../Components/QuizIntro";
import FoodPreview from "../Components/FoodPreview";

function Home({ searchResult }) {
  return (
    <div>
      <Header />
      <SearchBar searchResult={searchResult} />
      <QuizIntro />
      <FoodPreview title="Chicken" foodCategory={true} />
      <FoodPreview title="Chinese" foodCategory={false} />
    </div>
  );
}

export default Home;
