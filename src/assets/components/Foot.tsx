import "../styles/Foot.css";
import ScrollToTop from "../components/ScrollToTop";
import WA from "../Social/WA";
const Foot = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 FrameSquare. All Rights Reserved.</p>
      <ScrollToTop />
      <WA />
    </footer>
  );
};

export default Foot;
