import { useRef } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import "../styles/Services.css";
import servicesData from "../suppoters/services.json";

const Services = () => {
  const servicesContainerRef = useRef(null);

  const scrollLeft = () => {
    if (servicesContainerRef.current) {
      (servicesContainerRef.current as HTMLElement).scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (servicesContainerRef.current) {
      (servicesContainerRef.current as HTMLElement).scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="services-section container" id="services">
      <h2 className="title">Our Services</h2>
      <div className="services-scroll-container">
        {/* left button */}
        <div className="left-btn">
          <FaAnglesLeft className="left-icon" onClick={scrollLeft} />
        </div>
        {/* card container */}
        <div className="services-container" ref={servicesContainerRef}>
          {/* cards */}
          {servicesData.map((service) => (
            <div className="service" key={service.id}>
              <img src={service.imageUrl} alt={service.title} />
              <div className="service_body">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* right button */}
        <div className="right-btn">
          <FaAnglesRight className="right-icon" onClick={scrollRight} />
        </div>
      </div>
    </div>
  );
};

export default Services;
