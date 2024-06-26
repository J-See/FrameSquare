import React, { useEffect, useState } from "react";
import "../suppoters/Card.css";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string; // Optional custom class name
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  className = "",
}) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowSize.width <= 768;

  // const [disc_visible, setDisc_visible] = useState(false);
  // const toggleDisc = () => setDisc_visible(!disc_visible);
  return (
    <div className={`card${isMobile ? "" : " card_"}${className}`}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className={`card_body`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
