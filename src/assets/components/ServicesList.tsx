import { useState } from "react";
import "../styles/ServicesList.css";
import Card from "../suppoters/Card.tsx";
import FlipCard from "../suppoters/FlipCard.tsx";
import servicesData from "../suppoters/services.json";

const ServicesList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="services-list">
        <h2 className="title">Services</h2>
        <div className="services-list-container">
          {servicesData.map((service) => (
            <FlipCard
              frontContent={
                <div className={`card`}>
                  {service.imageUrl && (
                    <img src={service.imageUrl} alt={service.title} />
                  )}
                </div>
              }
              backContent={
                <div className={`card_body`}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              }
            />
            // <Card
            //   title={service.title}
            //   description={service.description}
            //   imageUrl={service.imageUrl}
            // />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesList;
