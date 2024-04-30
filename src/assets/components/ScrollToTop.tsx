import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import "../styles/ScrollToTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const scrolltop = () => {
    animateScroll.scrollToTop();
  };
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
  const goToTop = () => {
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
    <>
      {visible && (
        <button className="back-to-top" onClick={scrolltop}>
          <AiOutlineArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
