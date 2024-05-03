import "../suppoters/FlipCard.css";
import React, { useEffect, useState } from "react";
interface CardProps {
  //   frontContent: JSX.Element;
  //   backContent: JSX.Element;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard: React.FC<CardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <div className={`card_container`} onClick={handleClick}>
      <div className={`card_inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card_front">{frontContent}</div>
        <div className="card_back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
