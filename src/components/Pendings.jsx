import React from "react";
import PendingCard from "./PendingCard";

const Pendings = () => {
  return (
    <div>
      <h1 className="relative text-md font-semibold text-black">
        Request Appointments
      </h1>
      <div className="mt-5 flex flex-col items-center justify-center gap-3">
        {[1, 2, 3, 4].map((item) => (
          <PendingCard key={item} />
        ))}
      </div>
    </div>
  );
};

export default Pendings;
