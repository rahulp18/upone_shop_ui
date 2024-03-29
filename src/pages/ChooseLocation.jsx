import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineGpsFixed } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { Loading } from "../components";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { addToLat } from "../utils/geoConveter";
import { toast } from "react-hot-toast";
const ChooseLocation = () => {
  const navigate = useNavigate();
  const { token, url, setLoading, loading, checkToken } = useGlobalContext();
  const [location, setLocation] = useState("");
  const initialState = {
    lat: "",
    lng: "",
  };
  const [geoLocation, setGeoLocation] = useState(initialState);
  const getCurrentLocation = async (e) => {
    e.preventDefault();

    console.log(geoLocation);
    try {
      setLoading(true);
      console.log(location);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${url}/shop/location/update`, {
        location: location,
        geo: geoLocation,
      });
      console.log(res);
      navigate("/overview");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const findLocation = () => {
    addToLat(location, setGeoLocation, geoLocation);
  };
  useEffect(() => {
    checkToken();
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
          We will help you to grow your bussiness
        </p>
        <h1 className="text-2xl text-center font-roboto font-bold text-gray-900">
          Welcome to UP ONE
        </h1>
        <div className="flex items-center justify-center mt-12">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/building-location-from-sky-6267262-5182603.png"
            alt="location"
            className="w-auto h-[13rem] object-cover"
          />
        </div>

        <div className="flex flex-col mt-8 items-center justify-center">
          <h1 className="text-md font-roboto">
            Already given{" "}
            <span
              onClick={() => navigate("/dashboard")}
              className="text-sky-600 font-semibold cursor-pointer "
            >
              Skip
            </span>{" "}
          </h1>
          <form action="" onSubmit={getCurrentLocation}>
            <div className=" my-2 border-2 gap-3 flex items-center justify-start mt-5 border-sky-500 rounded-lg pl-4  w-full max-w-sm">
              <ImLocation2 />

              <input
                placeholder="Enter Your location"
                type="text"
                required
                className="text-lg placeholder-slate-600 w-full"
                onChange={(e) => setLocation(e.target.value)}
              />
              <button
                type="button"
                onClick={findLocation}
                className="bg-sky-500 rounded-tr-lg font-semibold text-white px-4 py-2 "
              >
                Find
              </button>
            </div>
            <button
              type="submit"
              className="btn w-full flex items-center gap-2 justify-center max-w-sm text-lg capitalize bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
            >
              <MdOutlineGpsFixed className="text-xl" />
              {loading ? <Loading /> : "Let's go!"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChooseLocation;
