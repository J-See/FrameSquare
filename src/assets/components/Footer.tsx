import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import "../styles/Footer.css";
const Footer = () => {
  const [visible, setVisible] = useState(false);

  // check for scrolling values
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // function that execute scroll to top feature
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <p>Phone: +1234567890</p>
        <p>Email: example@example.com</p>
        <p>Address: 123 Street, City, Country</p>
        <div className="social-media-icons">
          <a href="#">
            <AiOutlineFacebook />
          </a>
          <a href="#">
            <AiOutlineTwitter />
          </a>
          <a href="#">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>

      <div>
        {visible && (
          <button className="back-to-top" onClick={scrollToTop}>
            <AiOutlineArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
