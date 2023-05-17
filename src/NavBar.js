import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-links">
      <NavLink className="link" to="/">
        Home
      </NavLink>{" "}
      <NavLink className="link" to="/eat">
        Eat
      </NavLink>{" "}
      <NavLink className="link" to="/drink">
        Drink
      </NavLink>
    </nav>
  );
};

export default NavBar;
