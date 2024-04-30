import { FloatingWhatsApp } from "react-floating-whatsapp2";
const WhatsApp = () => {
  const phoneNumber = "+919619882057";
  const props = {
    phoneNumber,
    accountName: "Suraj Vishwakarma",
  };
  return <FloatingWhatsApp {...props} />;
};
export default WhatsApp;
