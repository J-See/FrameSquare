import { SetStateAction, useState } from "react";
import "../styles/ServicesList.css";
import Card from "../suppoters/Card.tsx";
import FlipCard from "../suppoters/FlipCard.tsx";
import servicesData from "../suppoters/services.json";

const ServicesList: React.FC = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    if (flippedIndex === index) {
      // Clicked on the already flipped card, so unflip it
      setFlippedIndex(null);
    } else {
      // Clicked on a new card, flip it and unflip the previously flipped card
      setFlippedIndex(index);
    }
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
              isFlipped={flippedIndex === service.id}
              onCardClick={() => handleCardClick(service.id)}
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
