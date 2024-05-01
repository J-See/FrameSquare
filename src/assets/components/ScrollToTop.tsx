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
        <AiOutlineArrowUp />
      </button>
    </>
  );
};

export default ScrollToTop;
