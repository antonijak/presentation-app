import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="jumbotron jumbotron-fluid mt-5">
      <div className="container">
        <h2 className="display-4">Welcome, student!</h2>
        <p className="lead">
          This is the place you can find, write and edit information for your
          presentation.
        </p>
        <div class="input-group">
          <Link
            to="/presentations"
            className="btn btn-outline-secondary btn-lg mr-2"
            role="button"
          >
            Presentations
          </Link>

          <Link
            to="/presentations/add-new"
            className="btn btn-outline-primary btn-lg"
            role="button"
          >
            Add New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;