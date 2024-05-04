import "../Social/WA.css";
import { FaWhatsapp } from "react-icons/fa6";
import ShowOnScroll from "../suppoters/ShowOnScroll";
const WA = () => {
  const openWhatsAppChat = (phoneNumber: number, message = "") => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank"); // Open in a new tab/window
  };

  return (
    <>
      <ShowOnScroll offset={100}>
        <div className="floating-whatsapp-btn">
          <div
            className="whatsapp-btn"
            onClick={() => openWhatsAppChat(9819459305, "")}
          >
            <FaWhatsapp />
          </div>
        </div>
      </ShowOnScroll>
    </>
  );
};

export default WA;
