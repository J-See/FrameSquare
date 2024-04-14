import { useState } from "react";
import myLogo from "/images/logo.png";
import menu from "/images/menu.svg";
import close from "/images/close.svg";
import "../styles/Nav.css";

const Nav = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
    // console.log(active);
  };
  return (
    <>
      <header>
        <nav className="navbar container">
          {/* logo */}
          <div className="grid logo-img">
            <img src={myLogo} alt="logo" />
          </div>
          {/* licks */}
          <ul className={`grid nav-lists ${active ? "active" : ""}`}>
            <li>
              <a href="#" className="nav-link" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link" onClick={toggleMenu}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className="nav-link" onClick={toggleMenu}>
                Contact me
              </a>
            </li>
            <li>
              <a
                href="tel:+919619882057"
                className="contact"
                onClick={toggleMenu}
              >
                Call us
              </a>
            </li>
          </ul>
          {/* menu icon */}
          <div className="grid menu-icon" onClick={toggleMenu}>
            {active ? <img src={close} /> : <img src={menu} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
