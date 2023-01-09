import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import EditStaf from "./EditStaf";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { toast } from "react-hot-toast";
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
  return (
    <div className="w-[150px] md-w-[300px] shadow-md max-w-md">
      <img src={staf.image} className="w-full object-cover h-[60px]" />
      <div className="px-2 py-1 flex  flex-col gap-1">
        <h1 className="text-md font-semibold">{staf.name}</h1>
        <h1 className="text-sm font-normal">
          Contact- <span className="text- font-semibold">{staf.number}</span>
        </h1>
        <h1 className="text-sm font-normal capitalize">
          Exep <span className="text-sm font-semibold">{staf.experience}</span>
        </h1>
        <div className="flex gap-2 items-center justify-end">
          <label htmlFor="my-modal-3">
            <FaUserEdit />
          </label>
          <EditStaf staf={staf} />
          <MdDelete onClick={() => deleteStaf(staf._id)} />
        </div>
      </div>
    </div>
  );
};

export default StafCard;
