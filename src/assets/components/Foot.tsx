import "../styles/Foot.css";
import ScrollToTop from "../components/ScrollToTop";
import WhatsApp from "../Social/WhatsApp";
import WA from "../Social/WA";
const Foot = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 FrameSquare. All Rights Reserved.</p>
      <ScrollToTop />
      <WhatsApp />
      <WA />
    </footer>
  );
};

export default Foot;
