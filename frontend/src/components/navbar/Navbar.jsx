import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="test.com">Jeu</a>
        </li>
        <li>
          <a href="test.com">Contact</a>
        </li>
        <li>
          <a href="test.com">Equipe</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
