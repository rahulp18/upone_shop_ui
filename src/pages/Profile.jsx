import axios from "axios";
import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BsCameraFill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import {
  CreateServices,
  EditService,
  Layout,
  ServiceCard,
  ShopCarousal,
} from "../components";
import EditShop from "../components/EditShop";
import { useGlobalContext } from "../context/context";

const Profile = () => {
  const { token, url, setLoading, loading, checkToken, getShopOwoner, owoner } =
    useGlobalContext();
  const [services, setServices] = useState([]);

  const fetchService = async () => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.get(`${url}/service/saloon`);
      setServices(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    checkToken();
    getShopOwoner();
    fetchService();
  }, []);

  return (
    <Layout select="profile">
      <main>
        <Toaster />
        <div className="relative">
          {owoner?.images.length !== 0 && (
            <ShopCarousal slides={owoner?.images} />
          )}

          <div className="flex items-center justify-end">
            <label htmlFor="editShop">
              <div className="p-1 bg-sky-600 z-50 rounded-full w-7 h-7  text-white flex items-center justify-center cursor-pointer">
                {" "}
                <MdEdit className="text-xl font-bold" />
              </div>
            </label>
            <EditShop owoner={owoner} />
          </div>
        </div>
        <div className="mt-2 px-4 ">
          <h1 className="text-md font-normal text-gray-700">
            Shop name :{" "}
            <span className="text-black font-semibold capitalize">
              {owoner?.shopName}
            </span>
          </h1>
          <h1 className="text-md font-normal text-gray-700">
            Number :{" "}
            <span className="text-black font-semibold capitalize">
              {owoner?.number}
            </span>
          </h1>
          <h1 className="text-md font-normal text-gray-700">
            Location :{" "}
            <span className="text-black font-semibold capitalize">
              Hyderabad
            </span>
          </h1>

          <div className="mt-4">
            <div className="my-5 flex justify-between items-center">
              <h1 className="text-md font-semibold text-gray-700">
                Add Services
              </h1>
              <button className="btn  btn-sm top-0 right-2 bg-sky-600 border-none">
                <label htmlFor="my-modal-5">Add</label>
              </button>
            </div>
            <CreateServices fetchService={fetchService} />
            <div className="mt-5 py-5">
              <h1 className="text-md font-semibold">Services</h1>
              <div className="flex items-center justify-center flex-col mt-3 gap-5">
                {services.length === 0 ? (
                  <h1 className="text-md font-semibold">No services !</h1>
                ) : (
                  services.map((item, index) => (
                    <ServiceCard
                      key={index}
                      data={item}
                      fetchService={fetchService}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
