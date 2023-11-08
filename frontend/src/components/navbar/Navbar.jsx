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
          <NavLink to="/Jeu">Jeu</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Equipe">Equipe</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
