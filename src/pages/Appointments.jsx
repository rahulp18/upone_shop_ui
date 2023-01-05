import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Layout, Past, Pendings, Upcoming } from "../components";

const Appointments = () => {
  const [active, setActive] = useState("upcoming");

  const activeStyle = "bg-[#10143d] text-white";
  const normalStyle = "text-black bg-transition";
  const navigate = useNavigate();
  return (
    <Layout select="appointments">
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
              active === "upcoming" ? activeStyle : normalStyle
            } `}
            onClick={() => setActive("upcoming")}
          >
            Upcoming
          </button>
          <button
            className={` px-4 py-1 rounded-lg   capitalize ${
              active === "past" ? activeStyle : normalStyle
            } `}
            onClick={() => setActive("past")}
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
          {active === "upcoming" ? (
            <Upcoming />
          ) : active === "past" ? (
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
