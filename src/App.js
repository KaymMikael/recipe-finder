import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MealPage from "./pages/MealPage";

const App = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/meal/:idMeal",
      element: <MealPage />,
    },
  ];
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Routes>
      </main>
    </div>
  );
};

export default App;
