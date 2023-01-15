import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Clock,
  StafTable,
  ServiceCard,
  AppointmentCard,
  Loading,
} from "../components";
import {
  useGlobalContext,
  fetchAppointments,
  appoinemts,
} from "../context/context";
const Home = () => {
  const {
    checkToken,
    token,
    url,
    loading,
    setLoading,
    logOut,
    getShopOwoner,
    owoner,
  } = useGlobalContext();
  const [activeServices, setActiveServices] = useState([]);
  const [activeStafs, setActiveStafs] = useState([]);
  const navigate = useNavigate();

  const fetchActiveStafs = async () => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/staf/saloon/active`);
      setActiveStafs(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const fetchActiveService = async () => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/service/saloon/active`);
      setActiveServices(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    checkToken(navigate);
    fetchActiveService();
    fetchActiveStafs();
    getShopOwoner();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Layout select="dashboard">
      <main className="relative">
        <div className="px-4 py-2">
          <h1 className="text-xl font-poppins text-gray-700 font-semibold">
            Hello ! <span className="text-sky-700">{owoner?.shopName}</span>
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

          {/* Staf List */}
          <div className="mt-5">
            <h1 className="text-lg text-black font-semibold font-poppins">
              My Stafs
            </h1>
            <div className="mt-5">
              <StafTable activeStafs={activeStafs} />
            </div>
          </div>
          {/* Services */}
          <div className="mt-5">
            <h1 className="text-lg text-black font-semibold font-poppins">
              Our Services
            </h1>
            <div className="flex flex-wrap gap-3 mt-5">
              {activeServices.length === 0 ? (
                <h1 className="text-md font-semibold ">No services active</h1>
              ) : (
                activeServices?.map((service, index) => (
                  <ServiceCard
                    key={index}
                    data={service}
                    fetchActiveService={fetchActiveService}
                  />
                ))
              )}
            </div>
          </div>
          {/* <div className="mt-5">
            <h1 className="text-lg text-black font-semibold font-poppins">
              Today's Appointment
            </h1>
            <div className="flex flex-wrap gap-2 items-center justify-center mt-3">
              {
              appoinemts.length===0?<h1 className="text-md">No apoinemtns</h1>:appoinemts.map((data,index)=>(
                <AppointmentCard key={index} data={data} />
              ))
              }
            </div>
          </div> */}
        </div>
        <div className="absolute top-2 right-2">
          <button
            className="text-md font-roboto bg-red-600 cursor-pointer text-white px-2 py-[2px] rounded-md shadow-sm"
            onClick={() => logOut(navigate)}
          >
            Logout
          </button>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
