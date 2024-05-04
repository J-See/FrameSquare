import { useEffect, useState } from "react";
import myLogo from "/images/logo.svg";
import menu from "/images/menu.svg";
import close from "/images/close.svg";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  // ## menu toggle
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
  };

  // ## Handle click outside the navbar to deactivate
  const handleClickOutside = (event: any) => {
    if (!event.target.closest(".navbar")) {
      // Check if clicked outside navbar
      setActive(false);
    }
  };
  // ## Handle click on body or outside navbar
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ## email or call
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  const handleContactClick = () => {
    const phoneNumber = "9819459305";
    const emailAddress = "your-email-address@example.com";

    if (isMobile) {
      if (/WhatsApp/.test(navigator.userAgent)) {
        window.location.href = `whatsapp://send?phone=${phoneNumber}`;
      } else {
        window.location.href = `tel:${phoneNumber}`;
      }
    } else {
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  // // ## scroll with NavLink
  // const scrollToElement = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //     element.classList.add("smooth-scroll");
  //   }
  // };
  return (
    <>
      <header>
        <nav className={`navbar container ${active ? "active" : ""}`}>
          {/* logo */}
          <div className="grid logo-img">
            <NavLink to="/">
              <img src={myLogo} alt="logo" />
            </NavLink>
          </div>
          {/* licks */}
          <ul className={`grid nav-lists ${active ? "active" : ""}`}>
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={toggleMenu}>
                Services
              </NavLink>
            </li>
            <li>
              <a className="contact" onClick={handleContactClick}>
                {isMobile ? "Call" : "Email"}
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
