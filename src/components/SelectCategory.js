import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

const SelectCategory = ({ state, setState }) => {
  const { categories, isLoading } = useContext(CategoryContext);

  return (
    <div className="my-2">
      <label htmlFor="category">Filter By Category</label>
      <select
        className="form-select w-50"
        aria-label="Default select example"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        {!isLoading &&
          categories.map((category) => (
            <option value={category.strCategory} key={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectCategory;
