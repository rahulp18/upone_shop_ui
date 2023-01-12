import axios from "axios";
import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";

const EditService = ({ serviceInfo, fetchServiceInfo }) => {
  const initialState = {
    serviceName: serviceInfo?.serviceName,
    price: serviceInfo?.price,
    status: serviceInfo?.status,
  };
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { url, token } = useGlobalContext();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.put(
        `${url}/service/${serviceInfo._id}`,
        formData
      );
      console.log(res);
      setLoading(false);
      fetchServiceInfo();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="editService" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="editService"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Edit Services</h3>
          <div className="mt-2">
            <form onSubmit={handleSubmit}>
              <div className="flow-root">
                <div className="form-group pb-3">
                  <label
                    for="serviceName"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Service Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="serviceName"
                    required
                    value={formData.serviceName}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="name"
                    placeholder="name"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="price"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Price<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="price"
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="price"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="status"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Status<span className="text-red-600">*</span>
                  </label>
                  <select
                    name="status"
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="active">Open</option>
                    <option value="inactive">Closed</option>
                  </select>
                </div>
              </div>
              <div className="flex  justify-end gap-3 mt-5 items-center">
                <button type="submit" className=" btn btn-sm ">
                  {loading ? <Loading /> : "Update"}
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

export default EditService;
