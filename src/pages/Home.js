import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SelectCategory from "../components/SelectCategory";
import MealList from "../components/MealList";

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("mealName");
  const [selectedCategory, setSelectedCategory] = useState("Beef");

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
      <MealList searchQuery={searchQuery} selectedCategory={selectedCategory} />
    </PageLayout>
  );
};

export default Home;
