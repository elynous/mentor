import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <span className="header__logo">Hype Learn</span>
      <div className="header__menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About Us</li>
        </ul>
        <ul>
          <li>Login</li>
          <Link to="/signup">
            <button>Get Started</button>
          </Link>
        </ul>
      </div>
    </header>
  );
};
