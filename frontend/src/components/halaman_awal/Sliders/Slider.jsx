import React from "react";
import img1 from "../../../images/back1.png";
import img3 from "../../../images/back3.png";
import img4 from "../../../images/back4.png";
import { Carousel } from "flowbite-react";
import Typewriter from "../Typewriter/Typewriter";

const Slider = () => {
  return (
    <section className="relative md:h-screen h-24">
      <div className="relative md:h-full bg-cover bg-center brightness-50 z-10 h-2/6 ">
        {/* Komponen Carousel yang menampilkan gambar-gambar slider */}
        <Carousel slideInterval={3000}>
          <img src={img1} alt="" />
          <img src={img4} alt="" />
          <img src={img3} alt="" />
        </Carousel>
      </div>
      <div className="absolute md:h-10 h-1 m-[3%] lg:m-[20%] inset-20 flex flex-col justify-center items-center z-20 md:text-[5vh] md:font-mono text-emerald-50">
        <Typewriter text="SISTEM INFORMASI ALUMNI" delay={100} />
      </div>
    </section>
  );
};

export default Slider;
