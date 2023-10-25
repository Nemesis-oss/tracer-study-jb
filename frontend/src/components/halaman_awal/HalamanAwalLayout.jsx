import React from "react";
import Navbar from "./Navbar/Navbar";
import Slider from "./Sliders/Slider";
import Cards from "./Cards/Cards";

const HalamanAwalLayout = () => {
  return (
    <div className="bg-gray-700">
      <Navbar />
      <Slider />
      <Cards />
    </div>
  );
};

export default HalamanAwalLayout;
