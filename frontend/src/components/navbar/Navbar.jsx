import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav>
      <NavLink to="/Home">
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
