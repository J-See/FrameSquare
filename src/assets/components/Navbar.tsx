import { MdWbSunny } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { RiMenu3Line } from "react-icons/ri";
import "../styles/Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <div className="navbar container">
        {/* logo */}
        <div className="logo">
          <MdWbSunny className="logo-svg" />
          <span className="text-logo">FrameSquare</span>
        </div>
        {/* nav links */}
        <div className={active ? "nav-links active" : "nav-links"}>
          <ul>
            <li>
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        {/* contact number */}
        <div className="contact-num">
          <figure className="indian-flag">
            <img src="./images/india-flag-icon.svg" alt="indian flag" />
          </figure>
          <span>+91 98194 59305</span>
        </div>
        {/* icons */}
        {/* <div className={active ? "menu-icons active" : "menu-icons"}> */}
        <div className="menu-icons">
          <RiMenu3Line className="open" onClick={() => setActive(!active)} />
          <RxCross1 className="close" onClick={() => setActive(!active)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
