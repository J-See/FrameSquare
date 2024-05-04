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
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/FrameSquare/" element={<Home />} />
          <Route path="/FrameSquare/services" element={<ServicesList />} />
          <Route path="/FrameSquare/*" element={<NoPage />} />
        </Routes>
        <Foot />
      </BrowserRouter>
    </div>
  );
};

export default App;
