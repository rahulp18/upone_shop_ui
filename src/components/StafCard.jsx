import React from "react";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import EditStaf from "./EditStaf";
const StafCard = () => {
  return (
    <div className="w-[150px] md-w-[300px] shadow-md max-w-md">
      <img
        src="https://images.startups.co.uk/wp-content/uploads/2017/06/Job-offer-new-employee-1.jpg?width=709&height=460&fit=crop"
        alt="image"
        className="w-full object-cover h-[60px]"
      />
      <div className="px-2 py-1 flex  flex-col gap-1">
        <h1 className="text-md font-semibold">Jhon Alsari</h1>
        <h1 className="text-sm font-normal">
          Contact- <span className="text- font-semibold">9777160598</span>
        </h1>
        <h1 className="text-sm font-normal capitalize">
          Exep <span className="text-sm font-semibold">1year</span>
        </h1>
        <div className="flex gap-2 items-center justify-end">
          <label htmlFor="my-modal-3">
            <FaUserEdit />
          </label>
          <EditStaf />
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default StafCard;
