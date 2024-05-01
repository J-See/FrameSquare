import React, { useEffect, useState } from "react";
import "../styles/About.css";
import { Link } from "react-scroll";
const About = () => {
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
  return (
    <div className="about-section" id="about">
      {/* left part */}
      <div className="left-part">
        <h2>Ashok Vishwakarma</h2>
        <p>I am aluminium fabrication worker</p>
        <button className="contactButton" onClick={handleContactClick}>
          {isMobile ? "Contact Me" : "Email Me"}
        </button>
        <Link
          to="map"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
          className="contactButton"
        >
          Reach us
        </Link>
      </div>
      {/* right part */}
      <div className="right-part">
        <img src="https://via.placeholder.com/250" alt="about image" />
      </div>
    </div>
  );
};

export default About;
