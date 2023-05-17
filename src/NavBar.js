import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar-links">
      <NavLink className="NavBar-link" exact to="/candybar">
        Candy Bar
      </NavLink>{" "}
      <NavLink className="NavBar-link" exact to="/chips">
        Chips
      </NavLink>
      <NavLink className="NavBar-link" exact to="/icedtea">
        Iced Tea
      </NavLink>
    </nav>
  );
};

export default NavBar;
