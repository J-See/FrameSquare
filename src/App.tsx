import Nav from "./assets/components/Nav";
import Foot from "./assets/components/Foot";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Services from "./assets/components/Services";
import Map from "./assets/components/Map";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Home />
      <Foot />
    </BrowserRouter>
  );
};

export default App;
