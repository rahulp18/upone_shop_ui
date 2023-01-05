import React, { useState } from "react";
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

const Profile = () => {
  return (
    <Layout select="profile">
      <main>
        <div className="relative">
          <ShopCarousal />
          <div className="flex items-center justify-end">
            <label htmlFor="editShop">
              <div className="p-1 bg-sky-600 z-50 rounded-full w-7 h-7  text-white flex items-center justify-center cursor-pointer">
                {" "}
                <MdEdit className="text-xl font-bold" />
              </div>
            </label>
            <EditShop />
          </div>
        </div>
        <div className="mt-2 px-4 ">
          <h1 className="text-md font-normal text-gray-700">
            Shop name :{" "}
            <span className="text-black font-semibold capitalize">To & Do</span>
          </h1>
          <h1 className="text-md font-normal text-gray-700">
            Owoner Name :{" "}
            <span className="text-black font-semibold capitalize">
              Rahul Pradhan
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
            <CreateServices />
            <div className="mt-5">
              <h1 className="text-md font-semibold">Services</h1>
              <div className="flex items-center justify-center flex-col mt-3 gap-5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <ServiceCard key={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
