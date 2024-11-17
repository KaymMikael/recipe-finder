import PageLayout from "../components/PageLayout";
import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MealDetails from "../components/MealDetails";

const MealPage = () => {
  const { idMeal } = useParams();
  const { data: meal, isLoading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
  );

  const instructions =
    meal && meal.length > 0
      ? meal[0].strInstructions
          .split("\r\n") // Split by line breaks
          .map((instr) => instr.trim()) // Remove leading/trailing spaces
          .filter((instr) => instr !== "") // Filter out empty strings
      : [];

  const ingredients =
    meal && meal.length > 0
      ? Object.keys(meal[0])
          .filter(
            (key) =>
              key.startsWith("strIngredient") &&
              meal[0][key] &&
              meal[0][key].trim() !== "" // Exclude empty or space-only ingredients
          )
          .map((key) => {
            const measureKey = `strMeasure${key.match(/\d+/)[0]}`;
            return `${meal[0][key]} - ${
              meal[0][measureKey]?.trim() || "to taste"
            }`; // Handle empty measures
          })
      : [];

  return (
    <PageLayout>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : !meal || meal.length === 0 ? (
        <>
          <p className="text-center">No meal found.</p>
          <Link
            to={"/"}
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mt-2 d-block"
          >
            Back to Home
          </Link>
        </>
      ) : (
        <MealDetails
          meal={meal}
          instructions={instructions}
          ingredients={ingredients}
        />
      )}
      <Link
        to={"/"}
        className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover my-2 d-block"
      >
        Back to Home
      </Link>
    </PageLayout>
  );
};

export default MealPage;
