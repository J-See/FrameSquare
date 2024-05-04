import "./App.css";
import Nav from "./assets/components/Nav";
import Foot from "./assets/components/Foot";
import Home from "./assets/components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesList from "./assets/components/ServicesList";
import NoPage from "./assets/components/NoPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/FrameSquare">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
};

export default App;
