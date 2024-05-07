import "../styles/Map.css";
const Map = () => {
  return (
    <div className="map-section" id="map">
      <h2 className="title">Reach Us</h2>
      <div className="gmap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d666.1092671074697!2d72.8734501532195!3d19.191575146999202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7133dad1b35%3A0x5f56e584a38e6d65!2sAmbedkar%20Chowk%2C%20Kandivali%2C%20Gokul%20Nagar%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1715054427154!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: 0, color: "white" }}
          // allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="office_address_container"></div>
    </div>
  );
};

export default Map;
