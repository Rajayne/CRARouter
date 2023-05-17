import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar-links">
      <NavLink className="link" exact to="/">
        Home
      </NavLink>{" "}
      <NavLink className="link" exact to="/eat">
        Eat
      </NavLink>{" "}
      <NavLink className="link" exact to="/drink">
        Drink
      </NavLink>
    </nav>
  );
};

export default NavBar;
