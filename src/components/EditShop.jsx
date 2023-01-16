import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useGlobalContext } from "../context/context";
import { BsCameraFill } from "react-icons/bs";
const EditShop = ({ owoner }) => {
  const initialState = {
    shopName: owoner?.shopName,
    number: owoner?.number,
    location: owoner?.location,
  };

  const { url, token, getShopOwoner } = useGlobalContext();
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // Handle Image

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(`${url}/shop/update`, {
        ...formData,
      });
      console.log(res);

      toast.success("Shop updated successfully");
      setLoading(false);
      getShopOwoner();
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.response.data.mesage);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <div>
      <input type="checkbox" id="editShop" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="editShop"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Shop Details</h3>
          <div className="mt-2">
            <form onSubmit={handleSubmit}>
              <div className="flow-root">
                <div className="form-group pb-3">
                  <label
                    for="shopName"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Shop Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="shopName"
                    value={formData.shopName}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="shopName"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="number"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Phone<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="number"
                    placeholder="+919777190520"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="location"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    location<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="location"
                    placeholder="ex- Marcket Complex,Cdr,754025"
                  ></input>
                </div>
              </div>
              <div className="flex  justify-end gap-3 mt-5 items-center">
                <button type="submit" className=" btn btn-sm ">
                  {loading ? "Updating..." : "Update"}
                </button>

                <button
                  // onClick={resetForm}
                  id="job"
                  className=" btn btn-sm btn-outline"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditShop;
