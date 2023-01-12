import React from "react";
import { useGlobalContext } from "../context/context";
import AddAppointment from "./AddAppointment";
import CardAppointment from "./CardAppointment";
import Loading from "./Loading";

const Upcoming = () => {
  const { appoinemts, loading } = useGlobalContext();

  return (
    <div>
      <div className="my-5 flex justify-between items-center">
        <h1 className="text-md font-semibold text-gray-700">Add Appointment</h1>
        <button className="btn  btn-sm top-0 right-2 bg-sky-600 border-none">
          <label htmlFor="my-modal-4">Add</label>
        </button>
      </div>
      <AddAppointment />
      {appoinemts.length === 0 ? (
        <h1 className="text-md">No appoinemts</h1>
      ) : (
        <div className="flex flex-col gap-2 items-center justify-center">
          {appoinemts.map((item, index) => (
            <CardAppointment key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Upcoming;
