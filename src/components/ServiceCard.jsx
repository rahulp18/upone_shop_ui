import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { toast } from "react-hot-toast";

const ServiceCard = ({ data, fetchService, fetchActiveService }) => {
  const navigate = useNavigate();
  const { url, token } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const deleteService = async (id) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${url}/service/${id}`);
      console.log(res);
      toast.success("Delete service");
      setLoading(false);
      fetchService();
      fetchActiveService();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-auto ">
      <div className="h-20 w-20 rounded-full overflow-hidden absolute left-0 p-[2px] border-2 bg-white border-gray-400">
        <img
          src={data.image.url}
          alt="services"
          className="h-full w-full rounded-full object-cover "
        />
      </div>
      <div className="ml-16 px-9 w-full flex py-1  justify-center items-center flex-col border-2 border-gray-400 rounded-sm ">
        <h1 className="text-md font-poppins font-semibold text-gray-600">
          {data?.serviceName}
        </h1>
        <h1 className="text-sm font-poppins font-semibold text-gray-600">
          Price{" "}
          <span className="text-md font-semibold font-roboto ">
            ₹ {data?.price}
          </span>
        </h1>

        <div className="flex  gap-1 items-center justify-end w-full text-sm text-black">
          <FaTrashAlt onClick={() => deleteService(data?._id)} />
        </div>
      </div>
      <div
        className="bg-[#10143d] text-white text-xl p-1 rounded-full -ml-3"
        onClick={() => navigate(`/services/${data?._id}`)}
      >
        <BiChevronRight />
      </div>
    </div>
  );
};

export default ServiceCard;
