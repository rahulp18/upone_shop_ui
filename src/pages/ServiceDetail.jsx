import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { CreateServices, EditService } from "../components";
const ServiceDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="p-1 bg-white z-50 rounded-full w-7 h-7 absolute top-1 left-1 text-black flex items-center justify-center cursor-pointer">
        <FiArrowLeft
          className="text-xl font-bold"
          onClick={() => navigate(`/dashboard`)}
        />
      </div>
      <div className="w-[100%] h-[216px] bg-black group relative  overflow-hidden ">
        <img
          className="w-full h-full object-cover opacity-75"
          src="https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-853427.jpg&fm=jpg"
          alt="images"
        />
        <div className="p-1 bg-sky-600 z-50 rounded-full w-7 h-7 absolute bottom-1 right-1 text-white flex items-center justify-center cursor-pointer">
          <label htmlFor="editService">
            {" "}
            <MdEdit className="text-xl font-bold" />
          </label>
        </div>
        <EditService />
      </div>
      <div className="mt-4 px-4">
        <h1 className="text-md font-normal text-gray-700">
          Service Name :{" "}
          <span className="font-semibold text-black">Span & Hair Cut</span>{" "}
        </h1>
        <h1 className="text-md font-normal text-gray-700">
          Price : <span className="font-semibold text-black">₹ 120</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ServiceDetail;
