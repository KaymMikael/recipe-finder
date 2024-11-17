import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

const Header = () => {
  return (
    <header className="sticky-top shadow bg-white">
      <PageLayout>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <Link className="navbar-brand" to={"/"}>
            RECIPE FINDER
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search meal name"
                aria-label="Search"
                required
                name="mealName"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </PageLayout>
    </header>
  );
};

export default Header;
