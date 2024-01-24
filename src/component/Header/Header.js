import React from "react";
import "./Header.css";
import Logo from "./Logo.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} width={120} />
      <nav className="navbar">
        <ul>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Solutions</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
      </nav>
      <div className="buttons">
        <button className="one">Talk to sales</button>
        <button className="two">Sign up for free</button>
      </div>
    </div>
  );
}
