import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "../styles/Foot.css";
const Foot = () => {
  const [visible, setVisible] = useState(false);

  // check for scrolling values
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  // function that execute scroll to top feature
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <footer className="footer">
      <p>&copy; 2024 FrameSquare. All Rights Reserved.</p>
      <div>
        {visible && (
          <button className="back-to-top" onClick={scrollToTop}>
            <AiOutlineArrowUp />
          </button>
        )}
      </div>
    </footer>
  );
};

export default Foot;
