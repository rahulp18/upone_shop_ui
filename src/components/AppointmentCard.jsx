import React from "react";

const AppointmentCard = () => {
  return (
    <div className="flex items-center flex-col justify-center h-auto w-[160px] bg-white shadow-md">
      <img
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/viratkohli71stton_0_1200x768.jpeg?VersionId=rSuKetDaI7YKVUq16w3hckeGX.AmDqBV"
        alt="image"
        className="w-full h-[70px] object-cover"
      />
      <div className="px-2 py-1 flex flex-col items-start gap-1">
        <h1 className="text-md font-semibold text-gray-600">Virat Kohli</h1>
        <p className="text-xs">
          Appointment Time{" "}
          <span className="font-semibold text-sm">10AM - 11AM</span>{" "}
        </p>
        <button className="btn btn-xs bg-sky-600 border-none capitalize ">
          Done
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
