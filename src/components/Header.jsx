import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as CloseMenuIcon } from "../assets/images/icon-close-menu.svg";
import { ReactComponent as MenuIcon } from "../assets/images/icon-menu.svg";
import { useState } from "react";
import { Navbar } from "./index.js";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-box">
        <Logo />
      </div>
      <button
        aria-controls="nav"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="menu"
        className="header__menu-btn"
      >
        {menuOpen ? (
          <CloseMenuIcon aria-hidden="true" />
        ) : (
          <MenuIcon aria-hidden="true" />
        )}
      </button>
      <Navbar aria-expanded={menuOpen} id="nav" />
      {menuOpen && <div className="backdrop" aria-hidden="true"></div>}
    </header>
  );
}
