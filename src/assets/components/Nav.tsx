import { useState } from "react";
import myLogo from "/images/logo.png";
import menu from "/images/menu.svg";
import close from "/images/close.svg";
import "../styles/Nav.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      element.classList.add("smooth-scroll");
    }
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
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-link"
                onClick={toggleMenu}
              >
                About
              </Link>

              {/* <NavLink to="/about" onClick={() => scrollToElement("about")}>
                About
              </NavLink> */}
            </li>
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-link"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="map"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="nav-link"
                onClick={toggleMenu}
              >
                Reach us
              </Link>
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
