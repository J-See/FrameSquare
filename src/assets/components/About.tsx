import { useEffect, useState } from "react";
import "../styles/About.css";
import { Link } from "react-scroll";
const About = () => {
  const profile_img = "FrameSquare/images/PP.jpg";
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
    const emailAddress = "ashokvishwakarma1406@gmail.com";

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
        <p>
          I am aluminium fabrication worker over{" "}
          <span className="text_gradient">20+ years</span> of experience and
          have served{" "}
          <span className="text_gradient">100+ satisfied customers.</span>
        </p>
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
        <img src={profile_img} alt="about image" />
      </div>
    </div>
  );
};

export default About;
