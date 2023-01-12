import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { CreateServices, EditService, Loading } from "../components";
import { useGlobalContext } from "../context/context";
const ServiceDetail = () => {
  const { url, token, setLoading, loading } = useGlobalContext();
  const navigate = useNavigate();
  const [serviceInfo, setServiceInfo] = useState(null);
  const id = useParams().id;
  const fetchServiceInfo = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/service/${id}`);
      setLoading(false);
      setServiceInfo(res.data.data);
      console.log(res);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchServiceInfo();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="h-screen">
      <div className="p-1 bg-white z-50 rounded-full w-7 h-7 absolute top-1 left-1 text-black flex items-center justify-center cursor-pointer">
        <FiArrowLeft
          className="text-xl font-bold"
          onClick={() => navigate(`/profile`)}
        />
      </div>
      <div className="w-[100%] h-[216px] bg-black group relative  overflow-hidden ">
        <img
          className="w-full h-full object-cover opacity-75"
          src={serviceInfo?.image}
          alt="images"
        />
        <div className="p-1 bg-sky-600 z-50 rounded-full w-7 h-7 absolute bottom-1 right-1 text-white flex items-center justify-center cursor-pointer">
          <label htmlFor="editService">
            {" "}
            <MdEdit className="text-xl font-bold" />
          </label>
        </div>
        <EditService
          serviceInfo={serviceInfo}
          fetchServiceInfo={fetchServiceInfo}
        />
      </div>
      <div className="mt-4 px-4">
        <h1 className="text-md font-normal text-gray-700">
          Service Name :{" "}
          <span className="font-semibold text-black">
            {serviceInfo?.serviceName}
          </span>{" "}
        </h1>
        <h1 className="text-md font-normal text-gray-700">
          Price :{" "}
          <span className="font-semibold text-black">
            ₹ {serviceInfo?.price}
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default ServiceDetail;
