import Hero from "./assets/components/Hero";
import Nav from "./assets/components/Nav";
import About from "./assets/components/About";
import Services from "./assets/components/Services";
import Footer from "./assets/components/Footer";
import Map from "./assets/components/Map";

const App = () => {
  return (
    <>
      <Nav />
      {/* <Hero /> */}
      <About />
      <Services />
      <Map />
      <Footer />
    </>
  );
};

export default App;
