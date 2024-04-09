import React from "react";
import "./Navbar.scss";
import logo from "../../img/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="navbar__list">
        <li>
          <a href="/" className="navbar__list_link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="navbar__list_link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="navbar__list_link link-active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
