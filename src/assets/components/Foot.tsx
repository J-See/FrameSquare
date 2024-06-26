import "../styles/Foot.css";
import ScrollToTop from "../components/ScrollToTop";
import WA from "../Social/WA";
import ShowOnScroll from "../suppoters/ShowOnScroll";
const Foot = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 FrameSquare. All Rights Reserved.</p>
      <ShowOnScroll>
        <ScrollToTop />
      </ShowOnScroll>
      <WA />
    </footer>
  );
};

export default Foot;
