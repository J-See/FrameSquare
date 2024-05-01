import "../styles/ServicesList.css";
import Card from "../suppoters/Card";
import servicesData from "../suppoters/services.json";

const ServicesList = () => {
  return (
    <>
      <div className="services-list">
        <h2 className="title">Services</h2>
        <div className="services-list-container">
          {servicesData.map((service) => (
            <div className="service-list" key={service.id}>
              <Card
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesList;
