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
      <div className="footer-navigation">
        <h4>Navigation</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-sitemap">
        <h4>Site Map</h4>
        <ul>
          <li>
            <a href="#">Category 1</a>
          </li>
          <li>
            <a href="#">Category 2</a>
          </li>
          <li>
            <a href="#">Category 3</a>
          </li>
          <li>
            <a href="#">Category 4</a>
          </li>
          <li>
            <a href="#">Category 5</a>
          </li>
        </ul>
      </div>
      <div className="footer-legal">
        <p>&copy; 2024 Your Website. All Rights Reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
      </div>
      <div className="footer-subscribe">
        <h4>Subscribe to Our Newsletter</h4>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-accessibility">
        <h4>Accessibility</h4>
        <ul>
          <li>
            <a href="#">Accessibility Statement</a>
          </li>
          <li>
            <a href="#">Accessibility Options</a>
          </li>
        </ul>
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
