import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SelectCategory from "../components/SelectCategory";
import useFetch from "../hooks/useFetch";
import MealList from "../components/MealList";

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("mealName");
  const [selectedCategory, setSelectedCategory] = useState("Beef");

  const url = searchQuery
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

  const { data: meals, isLoading } = useFetch(url);

  return (
    <PageLayout>
      {!searchQuery ? (
        <SelectCategory
          state={selectedCategory}
          setState={setSelectedCategory}
        />
      ) : (
        <Link
          to={"/"}
          className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mt-2 d-block"
        >
          Back to Home
        </Link>
      )}
      <MealList isLoading={isLoading} meals={meals} searchQuery={searchQuery} />
    </PageLayout>
  );
};

export default Home;
