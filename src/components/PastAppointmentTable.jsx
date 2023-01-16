import React from "react";
import { useGlobalContext } from "../context/context";

const PastAppointmentTable = ({ componentRef }) => {
  const { appoinemts } = useGlobalContext();
  return (
    <div className="overflow-x-scroll md:max-w-full max-w-xs">
      <div className="overflow-x-auto">
        <table className="table table-compact w-full" ref={componentRef}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Staf</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appoinemts?.map((item, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item?.services.toString()}</td>
                <td>{item?.stafId}</td>
                <td>{item?.price}</td>
                <td>20/03/2023</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastAppointmentTable;
