import React from "react";
import { useParams } from "react-router-dom";
import RecipeThumbnail from "../Components/RecipeThumbnail";
import SearchBar from "../Components/SearchBar";
import useRecipeSearch from "../Custom Hooks/use-recipe-search";

function SearchPage() {
  let { slug } = useParams();
  const [isLoading, errorMessage, data] = useRecipeSearch(slug);
  console.log(data);

  return (
    <div className="App">
      <SearchBar header="" />
      <p>Results here...</p>
      {data && <RecipeThumbnail data={data} />}
    </div>
  );
}

export default SearchPage;
