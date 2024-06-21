// src/components/Header.js
import React from 'react';
import logo from './logo_black.png';

const Header = () => {
  return (
    <header>
      <nav className = "nav">
        <img src = {logo} alt = "Ashoka"/>
        <ul>
          <li><a href="#about">about</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#links">links</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;