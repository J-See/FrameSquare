import React from "react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
