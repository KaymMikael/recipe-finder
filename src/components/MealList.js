import React from "react";
import MealCard from "./MealCard";

const MealList = ({ isLoading, meals, searchQuery }) => {
  return (
    <div className="row mx-1 gap-2 justify-content-center p-0">
      {!isLoading ? (
        meals && meals.length > 0 ? (
          meals.map((meal) => <MealCard meal={meal} key={meal.strMeal} />)
        ) : (
          <p>No results found for "{searchQuery}".</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MealList;
