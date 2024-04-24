import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import "../styles/Footer.css";
const Footer = () => {
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

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <AiOutlineArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
