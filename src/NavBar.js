import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-links">
      <NavLink className="link" exact to="/candybar">
        Candy Bar
      </NavLink>{" "}
      <NavLink className="link" exact to="/chips">
        Chips
      </NavLink>
      <NavLink className="link" exact to="/icedtea">
        Iced Tea
      </NavLink>
    </nav>
  );
};

export default NavBar;
