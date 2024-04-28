import React from "react";
import "../styles/Map.css";
const Map = () => {
  return (
    <div className="map-section" id="map">
      <h2 className="title">Reach Us</h2>
      <div className="gmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.025857233504!2d72.86985047472345!3d19.194072948256192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7286928fbf7%3A0xda5c74e002b638d8!2sKranti%20Nagar%20bus%20Stop!5e0!3m2!1sen!2sin!4v1714285425076!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: 0, color: "white" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
