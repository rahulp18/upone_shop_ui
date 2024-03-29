import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useGlobalContext } from "../context/context";

import PastAppointmentTable from "./PastAppointmentTable";

const Past = () => {
  const componentRef = useRef();
  const { appoinemts } = useGlobalContext();
  return (
    <div>
      <h1 className="relative text-md font-semibold text-black">
        Past Appointments
      </h1>
      {appoinemts.length === 0 ? (
        <h1 className="text-sm">No past appointments</h1>
      ) : (
        <div className="mt-5 ">
          <PastAppointmentTable componentRef={componentRef} />
          <div className="flex justify-end items- mt-5">
            <ReactToPrint
              trigger={() => (
                <button className="btn  btn-sm top-0 right-2 bg-sky-600 border-none">
                  Print !
                </button>
              )}
              content={() => componentRef.current}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Past;
