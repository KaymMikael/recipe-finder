import React from "react";

const MealDetails = ({ meal, instructions, ingredients }) => {
  return (
    <div className="row justify-content-between">
      <div className="col-12 col-md-6">
        <img
          src={meal[0].strMealThumb}
          alt="Meal thumbnail"
          className="img-fluid"
        />
      </div>
      <div className="col-12 col-md-6">
        <p className="text-center fs-2 fw-bold">{meal[0].strMeal}</p>
        <p>Category: {meal[0].strCategory}</p>
        <p>Area: {meal[0].strArea}</p>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}{" "}
        </ul>
        <h2>Instruction</h2>
        {meal[0].strInstructions
          .split("\r\n")
          .map((line, index) =>
            line.trim() ? <p key={index}>{line}</p> : null
          )}
      </div>
    </div>
  );
};

export default MealDetails;
