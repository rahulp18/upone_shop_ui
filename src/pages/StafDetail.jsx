import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MdEdit } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { EditStaf, Loading } from "../components";
import { useGlobalContext } from "../context/context";
const StafDetail = () => {
  const navigate = useNavigate();

  const { url, token, loading, setLoading } = useGlobalContext();
  const [stafInfo, setStafInfo] = useState(null);
  const id = useParams().id;
  const fetchStafInfo = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/staf/${id}`);
      console.log(res);
      setStafInfo(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStafInfo();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="h-screen">
      <div className="p-1 bg-white z-50 rounded-full w-7 h-7 absolute top-1 left-1 text-black flex items-center justify-center cursor-pointer">
        <FiArrowLeft
          className="text-xl font-bold"
          onClick={() => navigate(`/stafs`)}
        />
      </div>
      <div className="w-[100%] h-[216px] bg-black group relative  overflow-hidden ">
        <img
          className="w-full h-full object-cover opacity-75"
          src={stafInfo?.image}
          alt="images"
        />
        <div className="p-1 bg-sky-600 z-50 rounded-full w-7 h-7 absolute bottom-1 right-1 text-white flex items-center justify-center cursor-pointer">
          <label htmlFor="editStaf">
            {" "}
            <MdEdit className="text-xl font-bold" />
          </label>
        </div>
        {stafInfo !== null && (
          <EditStaf staf={stafInfo} fetchStafInfo={fetchStafInfo} />
        )}
      </div>
      <div className="mt-4 flex flex-col gap-2 px-4 font-roboto">
        <h1 className="text-md font-normal text-gray-900">
          Staf Name :{" "}
          <span className="font-semibold text-black">{stafInfo?.name}</span>{" "}
        </h1>
        <h1 className="text-md font-normal text-gray-900">
          Contact Number :{" "}
          <span className="font-semibold text-black">{stafInfo?.number}</span>{" "}
        </h1>
        <h1 className="text-md flex gap-1 items-center text-gray-900 font-roboto capitalize">
          Skills :{" "}
          <div className="flex gap-2 items-center flex-wrap">
            {stafInfo?.skills.map((skill) => (
              <span className="text-sm px-2 py-1 rounded-sm shadow-sm font-semibold bg-gray-100">
                {skill}
              </span>
            ))}
          </div>
        </h1>
        <h1 className="text-md font-normal text-gray-700">
          Experience :{" "}
          <span className="font-semibold text-black">
            {stafInfo?.experience}
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default StafDetail;
