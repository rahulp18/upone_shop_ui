import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import EditStaf from "./EditStaf";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const StafCard = ({ staf }) => {
  const { token, url, fetchAllStafs, stafData } = useGlobalContext();

  const deleteStaf = async (id) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.delete(`${url}/staf/${id}`);
      console.log(res);
      toast.success("Deleted Staf successfully");
      fetchAllStafs();
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="w-full md-w-[300px] shadow-md max-w-md">
      <img src={staf.image.url} className="w-full object-cover h-[150px]" />
      <div className="px-2 py-1 flex  flex-col gap-1">
        <div className="flex justify-between items-center  ">
          <h1 className="text-md font-semibold">{staf.name}</h1>
          <span
            className={` rounded-full px-2 font-semibold text-sm ${
              staf.status === "working"
                ? "bg-green-200 text-green-600"
                : "bg-red-200"
            } `}
          >
            {staf.status}
          </span>
        </div>
        <h1 className="text-sm font-normal">
          Contact- <span className="text- font-semibold">{staf.number}</span>
        </h1>
        <h1 className="text-sm font-normal capitalize">
          Exep <span className="text-sm font-semibold">{staf.experience}</span>
        </h1>
        <h1 className="text-sm font-normal capitalize">
          Skills{" "}
          <span className="text-sm font-semibold">
            {staf.skills.toString()}
          </span>
        </h1>
        <div className="flex gap-2 items-center justify-end">
          <FaUserEdit onClick={() => navigate(`/staf/${staf._id}`)} />

          <MdDelete onClick={() => deleteStaf(staf._id)} />
        </div>
      </div>
    </div>
  );
};

export default StafCard;
