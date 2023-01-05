import React, { useEffect } from "react";
import Lottie from "react-lottie-player";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import hello from "../assets/hello.json";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={`bg-white h-screen px-4 py-2 relative`}>
      <h1 className="flex text-[30px] font-poppins text-center items-center justify-start font-semibold text-sky-500">
        Up
        <img src={logo} alt="logo" className="h-12 w-12 object-cover" />{" "}
        <span className="text-sky-700  font-poppins font-bold">One</span>
      </h1>
      <div className="flex mt-10 w-full items-center justify-center">
        <Lottie
          loop
          animationData={hello}
          play
          style={{ width: "100%", height: 300 }}
        />
      </div>

      <div className="flex flex-col items-center gap-6 justify-center mt-5">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Welcome to Up ONE
          </h1>
          <p className="text-sm text-center text-gray-400">
            Save your valuable time
          </p>
        </div>
        <button
          onClick={() => navigate("/signup")}
          className="btn  max-w-sm btn-sm text-md bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
        >
          Start
        </button>
      </div>
      <div className="absolute bottom-10 w-[92px] -left-10 rounded-full bg-sky-300 h-[92px]"></div>
      <div className="absolute top-5 w-[40px] right-10 rounded-full bg-sky-300 h-[40px]"></div>
    </div>
  );
};

export default Welcome;
