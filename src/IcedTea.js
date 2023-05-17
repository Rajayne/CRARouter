import React from "react";
import { NavLink } from "react-router-dom";

const IcedTea = () => {
  return (
    <div>
      <h1>Iced Tea Page</h1>
      <NavLink className="Backlink" exact to="/">
        Back
      </NavLink>
    </div>
  );
};

export default IcedTea;
