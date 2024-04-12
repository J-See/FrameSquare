import React from "react";
import "../styles/Services.css";
import servicesData from "../suppoters/services.json";

const Services = () => {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-container container">
        {servicesData.map((service) => (
          <div key={service.id}>
            <img src={service.imageUrl} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
