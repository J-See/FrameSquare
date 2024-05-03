import React, { useState } from "react";
import { CardProps } from "./Card";

export const Card: React.FC<CardProps> = ({
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

  const [disc_visible, setDisc_visible] = useState(false);
  const toggleDisc = () => setDisc_visible(!disc_visible);
  return (
    <div className={`card card_ ${className}`} onClick={toggleDisc}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <div className={`card_body ${disc_visible ? "show_description" : ""}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
