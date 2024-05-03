import "../suppoters/FlipCard.css";
import React, { useEffect, useState } from "react";
interface CardProps {
  //   frontContent: JSX.Element;
  //   backContent: JSX.Element;

  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isFlipped: boolean;
  onCardClick: () => void;
}

const FlipCard: React.FC<CardProps> = ({
  frontContent,
  backContent,
  isFlipped,
  onCardClick,
}) => {
  return (
    <div className={`card_container`}>
      <div
        className={`card_inner ${isFlipped ? "flipped" : ""}`}
        onClick={onCardClick}
      >
        <div className="card_front">{frontContent}</div>
        <div className="card_back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
