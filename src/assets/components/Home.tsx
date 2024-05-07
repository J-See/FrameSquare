import About from "../components/About";
import Services from "../components/Services";
import Map from "../components/Map";
import Hero from "./Hero";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <About />
      <Services />
      <Map />
    </div>
  );
};

export default Home;
