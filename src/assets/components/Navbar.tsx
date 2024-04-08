import { MdWbSunny } from "react-icons/md";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar container">
        {/* logo */}
        <div className="logo">
          <MdWbSunny className="logo-svg" />
          <span className="text-logo">FrameSquare</span>
        </div>
        {/* nav links */}
        <div className="nav-links">
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
          </ul>
        </div>
        {/* contact number */}
        <div className="contact-num">
          <figure className="indian-flag">
            <img src="./images/india-flag-icon.svg" alt="indian flag" />
          </figure>
          <span>+91 98194 59305</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
