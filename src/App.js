import { useState } from "react";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import "./App.css";
import FetchApi from "./fetch-api";
import FetchMealdb from "./FetchMealdb";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import QuizPage from "./Pages/QuizPage";
import BrowsePage from "./Pages/BrowsePage";
import SearchPage from "./Pages/SearchPage";
import RecipePage from "./Pages/RecipePage";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const searchResult = (input) => {
    setSearchValue(input);
  };
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          exact
          element={<Home searchResult={searchResult} />}
        ></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/browse" element={<BrowsePage />}></Route>
        <Route path="/recipe" element={<RecipePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
