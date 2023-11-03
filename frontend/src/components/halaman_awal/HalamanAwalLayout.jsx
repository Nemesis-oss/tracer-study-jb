import React from "react";
import Navbar from "./Navbar/Navbar";
import Slider from "./Sliders/Slider";
import Cards from "./Cards/Cards";
import AnimatedSignUp from "./AnimatedSignUp/AnimatedSignUp";
import UserReview from "./UserReview/UserReview";
import Footer from "./Footers/footer";

const HalamanAwalLayout = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <Navbar />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <AnimatedSignUp />
      </div>
      <div>
        <UserReview />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HalamanAwalLayout;
