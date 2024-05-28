import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "nav__blur-background" : ""}`}>
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
