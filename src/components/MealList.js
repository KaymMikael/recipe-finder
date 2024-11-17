import React from "react";
import MealCard from "./MealCard";
import useFetch from "../hooks/useFetch";

const MealList = ({ searchQuery, selectedCategory }) => {
  const url = searchQuery
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

  const { data: meals, isLoading } = useFetch(url);

  return (
    <div className="row mx-1 gap-2 justify-content-center p-0">
      {!isLoading ? (
        meals && meals.length > 0 ? (
          meals.map((meal) => (
            <MealCard meal={meal} key={meal.strMeal} />
          ))
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
