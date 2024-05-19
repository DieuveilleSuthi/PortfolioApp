import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={handleLinkClick}>
          DieuveilleSuthi
        </a>

        <div className={`nav__list-container ${menuOpen ? 'nav__list--open' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#skills" className="nav__link" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link" onClick={handleLinkClick}>
                Experience
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" onClick={handleToggleMenu}>
          {menuOpen ? 'X' : '☰'}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
