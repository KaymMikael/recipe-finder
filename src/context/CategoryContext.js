import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const { data: categories, isLoading } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );

  return (
    <CategoryContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
