import React from "react";
import { NavLink } from "react-router-dom";

const CandyBar = () => {
  return (
    <div>
      <h1>Candy Bar Page</h1>
      <NavLink className="Backlink" exact to="/">
        Back
      </NavLink>
    </div>
  );
};

export default CandyBar;
