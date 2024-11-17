import React, { useEffect, useMemo } from "react";
import PageLayout from "../components/PageLayout";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const MealPage = () => {
  const { idMeal } = useParams();
  const { data: meal, isLoading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );

  const memoizedMeal = useMemo(() => meal, [meal]);

  useEffect(() => {
    console.log(memoizedMeal);
  }, [memoizedMeal]);

  return <PageLayout>MealPage</PageLayout>;
};

export default MealPage;
