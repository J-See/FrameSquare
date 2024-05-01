import "./App.css";
import Nav from "./assets/components/Nav";
import Foot from "./assets/components/Foot";
import Home from "./assets/components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesList from "./assets/components/ServicesList";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesList />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
};

export default App;
