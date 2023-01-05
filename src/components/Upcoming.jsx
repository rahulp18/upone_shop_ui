import React from "react";
import AddAppointment from "./AddAppointment";
import CardAppointment from "./CardAppointment";

const Upcoming = () => {
  return (
    <div>
      <div className="my-5 flex justify-between items-center">
        <h1 className="text-md font-semibold text-gray-700">Add Appointment</h1>
        <button className="btn  btn-sm top-0 right-2 bg-sky-600 border-none">
          <label htmlFor="my-modal-4">Add</label>
        </button>
      </div>
      <AddAppointment />
      <div className="flex flex-col gap-2 items-center justify-center">
        {[1, 2, 3, 4].map((item) => (
          <CardAppointment key={item} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
