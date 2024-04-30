import "../Social/WA.css";
import { FaWhatsapp } from "react-icons/fa6";
const WA = () => {
  const openWhatsAppChat = (phoneNumber: number, message = "") => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank"); // Open in a new tab/window
  };

  return (
    <>
      <div className="floating-whatsapp-btn">
        <div
          className="whatsapp-btn"
          onClick={() =>
            openWhatsAppChat(1234567890, "Hi there, I have a question...")
          }
        >
          <FaWhatsapp />
        </div>
      </div>
    </>
  );
};

export default WA;
