import Nav from "./assets/components/Nav";
import Foot from "./assets/components/Foot";
import Home from "./assets/components/Home";
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
