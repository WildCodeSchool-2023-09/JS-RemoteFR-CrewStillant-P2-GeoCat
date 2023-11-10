import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        {" "}
        <img src={logo} alt="" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Jeu</NavLink>
        </li>
        <li>
          <NavLink to="/tutorial">Tutorial</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/team">Equipe</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
