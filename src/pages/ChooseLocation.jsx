import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineGpsFixed } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { Loading } from "../components";
const ChooseLocation = () => {
  const navigate = useNavigate();
  const { token, url, setLoading, loading } = useGlobalContext();
  const [currentLocation, setCurrentLocation] = useState({
    lat: "",
    lng: "",
  });
  console.log(currentLocation);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setCurrentLocation({
        ...currentLocation,
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };
  const getCurrentLocation = async () => {
    try {
      setLoading(true);
      console.log(currentLocation);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${url}/shop/location/update`, {
        location: {
          lat: currentLocation.lat,
          lng: currentLocation.lng,
        },
      });
      console.log(res);
      navigate("/dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return (
    <div className="h-screen bg-white px-6 py-5">
      <div className="flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate("/verifyotp")}
          />
        </div>
        <h1
          className="text-md font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate("/verifyotp")}
        >
          back
        </h1>
      </div>
      <div className="w-[100%] h-auto mt-[7rem]  ">
        <p className="mb-5 mt-4 font-normal  text-center text-lg font-roboto text-gray-500">
          Hi, Rahul Nice to meet you
        </p>
        <h1 className="text-2xl text-center font-roboto font-bold text-gray-900">
          See service Around You
        </h1>
        <div className="flex items-center justify-center mt-12">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/building-location-from-sky-6267262-5182603.png"
            alt="location"
            className="w-auto h-[13rem] object-cover"
          />
        </div>
        <div className="flex flex-col mt-8 items-center justify-center">
          <button
            onClick={getCurrentLocation}
            className="btn w-full flex items-center gap-2 justify-center max-w-sm text-lg capitalize bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
          >
            <MdOutlineGpsFixed className="text-xl" />
            {loading ? <Loading /> : "Your Current Location"}
          </button>
          <div className="border-2 gap-3 flex items-center justify-start mt-5 border-sky-500 rounded-lg px-4 py-1 w-full max-w-sm">
            <BiSearchAlt />
            <input
              placeholder="Search another location"
              type="search"
              className="text-lg placeholder-slate-600 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLocation;
