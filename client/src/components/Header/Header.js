import React from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <span className="header__logo">Hype Learn</span>
      <div className="header__menu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
        </ul>
        <ul>
          <li><Link to="../Login">Login</Link></li>
          <button>Get Started</button>
        </ul>
      </div>
    </header>
  );
};
