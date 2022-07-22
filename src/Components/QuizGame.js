import React, { useState } from "react";
import foodRegions from "../Data/food-regions";
import foodTypes from "../Data/food-types";

function QuizGame() {
  const [type, setType] = useState(foodTypes);
  const [regions, setRegions] = useState(foodRegions);
  const [regionlikes, setRegionlikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);
  const [likes, setlikes] = useState([]);

  // Extra things to add:
  // A message that pops up if user selects dislikes ALL
  // A message that pops up if user selects likes ALL

  //Buttons -> <-
  const questions = [
    {
      question: "What type of food are you definitely NOT craving?",
      selectArr: type,
      removedArr: dislikes,
      label: "Not today:",
      removeItem: setType,
      addItem: setDislikes,
    },
    {
      question: "What type of food do you have a slight preference for?",
      selectArr: type,
      removedArr: likes,
      label: "Yumm: ",
      removeItem: setType,
      addItem: setlikes,
    },
    {
      question: "Which region's cuisine do you like?",
      selectArr: regions,
      removedArr: regionlikes,
      label: "likes",
      removeItem: setRegions,
      addItem: setRegionlikes,
    },
  ];
  const [i, setI] = useState(0);

  function handleFoodClick(event, remove, add, inverse = false) {
    const selectedItem = event.target.value;
    if (inverse === false) {
      remove((prev) => prev.filter((item) => item !== selectedItem));
      add((prev) => [...prev, selectedItem]);
    } else {
      add((prev) => prev.filter((item) => item !== selectedItem));
      remove((prev) => [...prev, selectedItem]);
    }
  }

  const Tags = ({ data, inverse, arr }) => (
    <div>
      {arr.map((food) => (
        <button
          type="button"
          value={food}
          key={food}
          onClick={(event) =>
            handleFoodClick(event, data[i].removeItem, data[i].addItem, inverse)
          }
        >
          {inverse ? food + " x" : food}
        </button>
      ))}
    </div>
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(likes);
    console.log(dislikes);
    console.log(regionlikes);
  };

  return (
    <div className="App">
      <h2>What Should I Cook?</h2>
      <form>
        <h3>{questions[i].question}</h3>
        <Tags data={questions} inverse={false} arr={questions[i].selectArr} />
        {questions[i].removedArr[0] && <label>{questions[i].label} </label>}
        <br />
        <Tags data={questions} inverse={true} arr={questions[i].removedArr} />

        {/* To-Do --> Refactor code into a Util Component (direction, invisible when, setI(), ) */}
        {i !== 0 && (
          <input
            onClick={() => setI((prev) => prev - 1)}
            type="button"
            value="<-- Prev"
          />
        )}
        {i !== 2 && (
          <input
            onClick={() => setI((prev) => prev + 1)}
            type="button"
            value="Next -->"
          />
        )}
        {i === 2 && <input type="submit" onClick={handleSubmit} />}
      </form>
    </div>
  );
}

export default QuizGame;
