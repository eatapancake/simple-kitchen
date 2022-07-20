import React from "react";
import imgPlaceholder from "../images/img-placeholder.jpg";
import Carousel from "react-elastic-carousel";

function FoodPreview({ title = "Chicken", foodCategory = true }) {
  let titleQuestion = "";

  const breakPoints = [{ itemsToShow: 2.5 }];
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

  return (
    <div>
      {pageTitle}

      <Carousel breakPoints={breakPoints}>
        {recipeArr.map((item, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <img height="250" alt={item.title} src={item.imgSrc} />
            <p>{item.title}</p>
          </div>
        ))}
      </Carousel>

      <br />
      <button>Browse Something Else</button>
    </div>
  );
}

export default FoodPreview;
