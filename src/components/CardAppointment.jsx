import React from "react";
import { MdWifiCalling2 } from "react-icons/md";
import { RiShareCircleFill } from "react-icons/ri";

const CardAppointment = () => {
  return (
    <div className="flex shadow-lg w-[100%] max-w-lg rounded-lg ">
      <div className="basis-1/3 bg-sky-400 text-white ">
        <div className="flex items-center justify-center h-full gap-3 flex-col">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="basis-2/3 h-full  bg-white px-2 py-4">
        <h1 className="text-lg uppercase text-gray-700 font-semibold font-roboto ">
          Rahul Pradhan
        </h1>
        <div className="flex justify-between items-start">
          <h1 className="text-md capitalize text-gray-700 font-semibold font-roboto ">
            Baber :
          </h1>
          <div className="">
            <h1 className="text-md capitalize text-gray-700 font-normal font-roboto ">
              Panvan Chandan
            </h1>
            <h1 className="text-sm capitalize text-gray-700 font-normal font-roboto ">
              Hair Cut Hair Spa
            </h1>
            <h1 className="text-sm capitalize text-gray-700 font-normal font-roboto ">
              10AM -11AM
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 ">
          <button className="text-red-500 font-bold bg-red-50 border-none px-3 py-2 rounded-lg text-sm">
            Cancel
          </button>
          <button className="text-green-500 font-bold bg-green-50 border-none px-3 py-2 rounded-lg text-sm">
            Done
          </button>
          <div className="flex gap-2 items-center justify-center">
            <div className="bg-sky-100 p-1 rounded-md">
              <a href={`tel:${9777160598}`}>
                <MdWifiCalling2 className="font-semibold text-xl text-sky-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAppointment;
