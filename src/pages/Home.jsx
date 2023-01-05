import React from "react";
import {
  Layout,
  Clock,
  StafTable,
  ServiceCard,
  AppointmentCard,
} from "../components";
const Home = () => {
  return (
    <Layout select="dashboard">
      <main>
        <div className="px-4 py-2">
          <h1 className="text-xl font-poppins text-gray-700 font-semibold">
            Hello ! Shop Name
          </h1>
          {/* Head */}
          <div className="flex mt-5 items-center flex-wrap justify-center gap-2">
            <div className="px-3 py-2 rounded-lg shadow-md flex flex-col items-center justify-center text-sky-600 bg-white">
              <h1 className="text-sm font-light capitalize">Current Time</h1>
              <Clock />
            </div>
            <div className="px-3 py-2 rounded-lg shadow-sm flex flex-col items-center justify-center bg-sky-600 text-white">
              <h1 className="text-sm font-light capitalize">Today's Date</h1>
              <p className="text-md font-semibold">
                {new Date().toLocaleDateString()}
              </p>
            </div>
            <div className="px-3 py-2 rounded-lg shadow-sm flex flex-col items-center justify-center bg-sky-600 text-white">
              <h1 className="text-sm font-light capitalize">
                Appointments Request
              </h1>
              <p className="text-lg font-semibold">5</p>
            </div>
          </div>
          {/* Tpdays Appointment */}

          {/* Staf List */}
          <div className="mt-5">
            <h1 className="text-lg text-black font-semibold font-poppins">
              My Stafs
            </h1>
            <div className="mt-5">
              <StafTable />
            </div>
          </div>
          {/* Services */}
          <div className="mt-5">
            <h1 className="text-lg text-black font-semibold font-poppins">
              Our Services
            </h1>
            <div className="flex flex-col gap-3 mt-5">
              {[1, 2, 3, 4, 5].map((item) => (
                <ServiceCard key={item} />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-lg text-black font-semibold font-poppins">
              Today's Appointment
            </h1>
            <div className="flex flex-wrap gap-2 items-center justify-center mt-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <AppointmentCard key={item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
