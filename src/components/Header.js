import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de la marque" height="50" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/collections">Collections</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
