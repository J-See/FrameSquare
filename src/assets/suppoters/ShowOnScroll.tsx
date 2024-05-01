import "../suppoters/ShowOnScroll.css";
import React, { useEffect, useState } from "react";

interface ShowOnScrollProps {
  children: React.ReactNode;
  offset?: number;
}

const ShowOnScroll: React.FC<ShowOnScrollProps> = ({
  children,
  offset = 100,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollTop > offset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]); // Re-run useEffect if offset changes

  return (
    <div className={`show-on-scroll ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
};

export default ShowOnScroll;
