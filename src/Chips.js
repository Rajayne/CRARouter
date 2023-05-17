import React from "react";
import { NavLink } from "react-router-dom";

const Chips = () => {
  return (
    <div>
      <h1>Chips Page</h1>
      <NavLink className="Backlink" exact to="/">
        Back
      </NavLink>
    </div>
  );
};

export default Chips;
