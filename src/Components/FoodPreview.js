import React from "react";
import imgPlaceholder from "../images/img-placeholder.jpg";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";

function FoodPreview({
  title = "Chicken",
  foodCategory = true,
  data = [{ name: "cheese", image: "none" }],
}) {
  let titleQuestion = "Art thou Craving...";
  let id = "na";

  const breakPoints = [{ width: 1000, itemsToShow: 2.5 }];
  // const recipeArr = [
  //   {
  //     imgSrc: imgPlaceholder,
  //     link: "www.anyway.dont",
  //     title: "Hamburger",
  //   },
  //   {
  //     imgSrc: imgPlaceholder,
  //     link: "www.anyway.dont",
  //     title: "Hamburger",
  //   },
  //   {
  //     imgSrc: imgPlaceholder,
  //     link: "www.anyway.dont",
  //     title: "Hamburger",
  //   },
  //   {
  //     imgSrc: imgPlaceholder,
  //     link: "www.anyway.dont",
  //     title: "Hamburger",
  //   },
  // ];

  if (foodCategory) {
    titleQuestion = "In the Mood for...";
    id = "Browse";
  }
  const pageTitle = (
    <div>
      <h2>{titleQuestion} </h2>
      <h2>{title}...?</h2>
      {/* recipes here */}
    </div>
  );
  const FoodCard = ({ item }) => {
    return (
      <div key={item.id}>
        {" "}
        <div style={{ width: "300px", overflow: "hidden", margin: "10px" }}>
          <Link to={`recipe/${item.id}`}>
            <img height="250" alt={item.name} src={item.image} />
          </Link>
        </div>{" "}
        <p>{item.name}</p>
      </div>
    );
  };

  //TO-DO
  //
  //Clicking on Picture ----> new Website

  return (
    <div id={id} className="App">
      {pageTitle}

      <Carousel breakPoints={breakPoints}>
        {data.map((item, index) => (
          <div key={index}>
            <FoodCard item={item} />
          </div>
        ))}
      </Carousel>
      <br />
      <Link to="/browse">
        <button>Browse Something Else</button>
      </Link>
    </div>
  );
}

export default FoodPreview;
