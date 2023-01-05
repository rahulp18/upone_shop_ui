import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ServiceCard = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex items-center justify-center w-auto ">
      <div className="h-20 w-20 rounded-full overflow-hidden absolute left-0 p-1 border-2 bg-white border-gray-400">
        <img
          src="https://wallpaperaccess.com/full/7171473.jpg"
          alt="services"
          className="h-full w-full rounded-full object-cover "
        />
      </div>
      <div className="ml-16 px-9 w-full flex py-1  justify-center items-center flex-col border-2 border-gray-400 rounded-sm ">
        <h1 className="text-md font-poppins font-semibold text-gray-600">
          Hair Cut
        </h1>

        <div className="flex  gap-1 items-center justify-between text-sm text-black">
          <p className="text-gray-600 text-sm ">In 30 min</p>
          <FaTrashAlt />
        </div>
      </div>
      <div
        className="bg-[#10143d] text-white text-xl p-1 rounded-full -ml-3"
        onClick={() => navigate(`/services/5`)}
      >
        <BiChevronRight />
      </div>
    </div>
  );
};

export default ServiceCard;
