import React from "react";

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
  return (
    <div className={`card ${className}`}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
