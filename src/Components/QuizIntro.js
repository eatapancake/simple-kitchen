import React from "react";
import { Outlet, Link } from "react-router-dom";

function QuizIntro() {
  const onQuizClick = () => {
    //To-Do
    // Go to... ---> Quiz Page
  };
  return (
    <div className="App" id="Quiz">
      <h2>Can't Decide..?</h2>
      <p>Find your new favorite recipe</p>
      <Link to="/quiz">
        <input type="button" value="Quiz"></input>
      </Link>
    </div>
  );
}

export default QuizIntro;
