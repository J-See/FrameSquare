import { animateScroll } from "react-scroll";
import "../styles/ScrollToTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const scrolltop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <button className="back-to-top" onClick={scrolltop}>
        <AiOutlineArrowUp className="arrow_icon" />
      </button>
    </>
  );
};

export default ScrollToTop;
