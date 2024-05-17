import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          DieuveilleSuthi
        </NavLink>

        <div className={`nav__list-container ${menuOpen ? 'nav__list--open' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/Skills" className="nav__link" onClick={() => setMenuOpen(false)}>
                Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Experience" className="nav__link" onClick={() => setMenuOpen(false)}>
                Experience
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Projects" className="nav__link" onClick={() => setMenuOpen(false)}>
                Projects
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/Contact" className="nav__link" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {menuOpen?
            <div className="nav__toggle" onClick={handleToggleMenu}>
                X
            </div>:        
            <div className="nav__toggle" onClick={handleToggleMenu}>
                ☰
            </div>
        }
      </nav>
    </header>
  );
};

export default Navbar;
