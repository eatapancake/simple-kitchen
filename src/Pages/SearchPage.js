import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../common/loading-spinner";
import RecipeThumbnail from "../Components/RecipeThumbnail";
import SearchBar from "../Components/SearchBar";
import useRecipeSearch from "../Custom Hooks/use-recipe-search";

function SearchPage() {
  let { slug } = useParams();

  const [isLoading = true, errorMessage, data] = useRecipeSearch(slug);

  let contents;

  if (isLoading && slug) contents = <LoadingSpinner />;
  else if (errorMessage !== "" && slug) contents = <p>Recipe Not Found</p>;
  else if (data && slug) contents = <RecipeThumbnail data={data} />;
  else contents = <p>Please Search for a Recipe</p>;

  return (
    <div className="App">
      <SearchBar header="" />
      <br />
      {/* 
      {isLoading && <LoadingSpinner />}
      {data && <RecipeThumbnail data={data} />} */}
      {contents}
    </div>
  );
}

export default SearchPage;
