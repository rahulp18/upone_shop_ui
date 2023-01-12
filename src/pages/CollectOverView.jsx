import axios from "axios";
import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Loading } from "../components";
import { useGlobalContext } from "../context/context";

const CollectOverView = () => {
  const { url, token, setLoading, loading } = useGlobalContext();
  const [overview, setOverview] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${url}/shop/update`, { overview: overview });
      console.log(res);
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-white px-6 py-5">
      <div className="flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate("/location")}
          />
        </div>
        <h1
          className="text-md font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate("/location")}
        >
          back
        </h1>
      </div>
      <div className="mt-6">
        <h1 className="text-lg  font-semibold text-gray-700">
          Tell Us about your Salon !
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <textarea
            className="textarea textarea-bordered min-h-[200px] w-full"
            placeholder="Give us a overview it will show in customer sight"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
          <div className="flex justify-end items-center gap-2 mt-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="btn bg-transparent text-sky-600 border-2   border-sky-600 btn-sm  hover:bg-sky-900 hover:text-white "
            >
              Not Now
            </button>
            <button
              type="submit"
              className="btn bg-sky-600 text-white btn-sm border-none hover:bg-sky-900 "
            >
              {loading ? <Loading /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollectOverView;
