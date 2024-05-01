import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Services from "../components/Services";
import Map from "../components/Map";

const Home = () => {
  return (
    <div id="home">
      <About />
      <Services />
      <Map />
    </div>
  );
};

export default Home;
