import React from "react";
import imgPlaceholder from "../images/img-placeholder.jpg";
import Carousel from "react-elastic-carousel";

function FoodPreview({ title = "Chicken", foodCategory = true }) {
  let titleQuestion = "";

  const breakPoints = [{ width: 1000, itemsToShow: 2.5 }];
  const recipeArr = [
    {
      imgSrc: imgPlaceholder,
      link: "www.anyway.dont",
      title: "Hamburger",
    },
    {
      imgSrc: imgPlaceholder,
      link: "www.anyway.dont",
      title: "Hamburger",
    },
    {
      imgSrc: imgPlaceholder,
      link: "www.anyway.dont",
      title: "Hamburger",
    },
    {
      imgSrc: imgPlaceholder,
      link: "www.anyway.dont",
      title: "Hamburger",
    },
  ];

  foodCategory
    ? (titleQuestion = "In the Mood for...")
    : (titleQuestion = "Art thou Craving...");
  const pageTitle = (
    <div>
      <h2>{titleQuestion} </h2>
      <h2>{title}...?</h2>
      {/* recipes here */}
    </div>
  );
  const FoodCard = ({ item }) => {
    return (
      <div>
        <div style={{ width: "300px", overflow: "hidden", margin: "10px" }}>
          <img height="250" alt={item.title} src={item.imgSrc} />
        </div>
        <p>{item.title}</p>
      </div>
    );
  };

  //TO-DO
  //
  //Clicking on Picture ----> new Website

  return (
    <div>
      {pageTitle}

      <Carousel breakPoints={breakPoints}>
        {recipeArr.map((item, index) => (
          <FoodCard item={item} key={index} />
        ))}
      </Carousel>
      <br />
      <button>Browse Something Else</button>
    </div>
  );
}

export default FoodPreview;
