import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import SelectCategory from "../components/SelectCategory";
import MealList from "../components/MealList";

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("mealName");
  const [selectedCategory, setSelectedCategory] = useState("Beef");

  const memoizedSearchQuery = useMemo(() => searchQuery, [searchQuery]);
  const memoizedSelectedCategory = useMemo(() => selectedCategory, [selectedCategory]);

  return (
    <PageLayout>
      {!memoizedSearchQuery ? (
        <SelectCategory
          state={memoizedSelectedCategory}
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
      <MealList searchQuery={memoizedSearchQuery} selectedCategory={memoizedSelectedCategory} />
    </PageLayout>
  );
};

export default Home;
