import Nav from "./assets/components/Nav";
import Foot from "./assets/components/Foot";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Services from "./assets/components/Services";
import Map from "./assets/components/Map";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/map" element={<Map />} /> */}
      </Routes>
      <Foot />
    </BrowserRouter>
  );
};

export default App;
