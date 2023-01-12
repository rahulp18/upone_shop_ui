import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Layout, Past, Pendings, Upcoming } from "../components";
import { useGlobalContext } from "../context/context";
import { Toaster } from "react-hot-toast";
const Appointments = () => {
  const [active, setActive] = useState("pending");
  const { fetchAppointments, appoinemts, fetchSingleStaf } = useGlobalContext();
  const activeStyle = "bg-[#10143d] text-white";
  const normalStyle = "text-black bg-transition";
  const navigate = useNavigate();

  useEffect(() => {
    fetchAppointments(active);
  }, [active]);
  console.log(appoinemts);
  return (
    <Layout select="appointments">
      <Toaster />
      <div className="px-4 py-2">
        <div className="flex items-center justify-start gap-3">
          <div className="p-1 bg-sky-600 z-50 rounded-full w-7 h-7  top-1 left-1 text-white flex items-center justify-center cursor-pointer">
            <FiArrowLeft
              className="text-xl font-bold"
              onClick={() => navigate(`/dashboard`)}
            />
          </div>
          <h1 className="text-lg font-semibold text-gray-700">
            Watch Appointments
          </h1>
        </div>
        {/* Nav */}
        <div className="flex justify-around items-center mt-9 ">
          <button
            className={` px-4 py-1 rounded-lg   capitalize ${
              active === "approved" ? activeStyle : normalStyle
            } `}
            onClick={() => setActive("approved")}
          >
            Upcoming
          </button>
          <button
            className={` px-4 py-1 rounded-lg   capitalize ${
              active === "completed" ? activeStyle : normalStyle
            } `}
            onClick={() => setActive("completed")}
          >
            Past
          </button>
          <button
            className={` px-4 py-1 rounded-lg   capitalize ${
              active === "pending" ? activeStyle : normalStyle
            } `}
            onClick={() => setActive("pending")}
          >
            Pending
          </button>
        </div>
        <div className="mt-6">
          {active === "approved" ? (
            <Upcoming />
          ) : active === "completed" ? (
            <Past />
          ) : (
            <Pendings />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Appointments;
