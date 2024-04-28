import React, { useRef } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import "../styles/Services.css";
import servicesData from "../suppoters/services.json";

const Services = () => {
  const servicesContainerRef = useRef(null);

  const scrollLeft = () => {
    if (servicesContainerRef.current) {
      servicesContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (servicesContainerRef.current) {
      servicesContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="services-section container">
      <h2 className="title">Our Services</h2>
      <div className="services-scroll-container">
        <div className="left-btn">
          <FaAnglesLeft className="left-icon" onClick={scrollLeft} />
        </div>
        <div className="services-container" ref={servicesContainerRef}>
          {servicesData.map((service) => (
            <div className="service" key={service.id}>
              <img src={service.imageUrl} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="right-btn">
          <FaAnglesRight className="right-icon" onClick={scrollRight} />
        </div>
      </div>
    </div>
  );
};

export default Services;
