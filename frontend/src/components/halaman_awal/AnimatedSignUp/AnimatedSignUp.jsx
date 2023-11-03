import React from "react";
import Reveal, { Bounce, Fade } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  
  }
`;

const AnimatedSignUp = () => {
  return (
    <Fade>
      <div className="mx-auto p-4 md:py-8 bg-black text-center sm:justify-center bg-black ">
        {/* Garis pemisah */}
        <h2 className="text-gray-400 tracking-[.25em] mt-[1em] mb-[1em] ">
          REGISTRASI USER
        </h2>
        <hr className="mx-auto text-center w-[40%]" />

        <div className="sm:flex sm:items-center sm:justify-center  text-center item-center">
          <label className="text-2xl font-semibold text-white text-center w-[20%]">
            Sistem Informasi Alumni Daftar Sekarang!
          </label>
        </div>
        <div className="animate-bounce mt-8 mb-6">
          <a href="#" className=" bg-white p-4 rounded py-4 px-8">
            SIGN UP!
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default AnimatedSignUp;
