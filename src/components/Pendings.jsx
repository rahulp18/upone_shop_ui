import React from "react";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";
import PendingCard from "./PendingCard";

const Pendings = () => {
  const { appoinemts, loading } = useGlobalContext();
  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <div>
      <h1 className="relative text-md font-semibold text-black">
        Request Appointments
      </h1>
      {appoinemts.length === 0 ? (
        <h1 className="text-md">No appoinemts.</h1>
      ) : (
        <div className="mt-5 flex flex-col items-center justify-center gap-3">
          {appoinemts?.map((item, index) => (
            <PendingCard key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Pendings;
