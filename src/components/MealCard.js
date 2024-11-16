import React from "react";
import { Link } from "react-router-dom";

const MealCard = ({ meal }) => {
  return (
    <div className="card col-12 col-sm-5 col-md-3 col-lg-2 rounded shadow p-0">
      <img
        src={meal.strMealThumb}
        className="card-img-top"
        alt="Meal thumbnail "
      />
      <div className="card-body">
        <p>{meal.strMeal}</p>
        <Link to={`/meal/${meal.idMeal}`} className="btn btn-primary w-100">
          View
        </Link>
      </div>
    </div>
  );
};

export default MealCard;
