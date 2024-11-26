'use client'
import React, { useState } from 'react';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="logo">
          <h1>Burger Menu</h1>
        </div>
        <div className="burger" onClick={toggleMenu}>
          <div className={isMenuOpen ? "burgerLineOpen" : "burgerLine"}></div>
          <div className={isMenuOpen ? "burgerLineOpen" : "burgerLine"}></div>
          <div className={isMenuOpen ? "burgerLineOpen" : "burgerLine"}></div>
        </div>
        <ul className={`navLinks ${isMenuOpen ? "active" : ""}`}>
          <li>Home</li>
          <li>About</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;