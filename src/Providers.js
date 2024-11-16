import React from "react";
import CategoryProvider from "./context/CategoryContext";

const Providers = ({ children }) => {
  return <CategoryProvider>{children}</CategoryProvider>;
};

export default Providers;
