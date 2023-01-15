import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { slot } from "../utils/slot";
import moment from "moment";
import { Toaster, toast } from "react-hot-toast";
const AddAppointment = () => {
  const { url, token, fetchAllStafs, stafData, user, fetchServices, services } =
    useGlobalContext();
  const [loading, setLoading] = useState(false);
  const initialState = {
    name: "",
    phone: "",
    services: "",
    stafId: "",
    slot_time: "",
    date: "",
    price: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const res = await axios.post(`${url}/appointments/slef/add`, {
        ...formData,
        slot_date: moment(formData.date).format("YYYY-MM-DD"),
        services: [formData.services],
      });
      console.log(res);
      setLoading(false);
      toast.success("Appointment added successfully");
      setFormData(initialState);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error?.response?.data);
    }
  };
  useEffect(() => {
    fetchAllStafs();
    fetchServices();
  }, []);
  return (
    <div>
      <Toaster />
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Appointment Manually</h3>
          <div className="mt-2">
            <form onSubmit={handleSubmit}>
              <div className="flow-root">
                <div className="form-group pb-3">
                  <label
                    for="name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jhon Smith"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="name"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="phone"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Contact Info<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    placeholder="+919777150689"
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="phone"
                  ></input>
                </div>

                <select
                  name="services"
                  onChange={handleChange}
                  className="select select-sm select-primary w-full max-w-xs my-2"
                >
                  <option disabled selected>
                    Choose Services
                  </option>
                  {services?.length === 0 ? (
                    <option value="">Don't Play game</option>
                  ) : (
                    services?.map((item, index) => (
                      <option value={item?.serviceName} key={index}>
                        {item?.serviceName}
                      </option>
                    ))
                  )}
                </select>
                <select
                  name="stafId"
                  onChange={handleChange}
                  className="select select-sm select-primary w-full max-w-xs my-2"
                >
                  <option disabled selected>
                    Choose Staf
                  </option>
                  {stafData?.length === 0 ? (
                    <option value="">Don't Play game</option>
                  ) : (
                    stafData?.map((item, index) => (
                      <option value={item?._id} key={index}>
                        {item?.name}
                      </option>
                    ))
                  )}
                </select>
                <select
                  name="slot_time"
                  onChange={handleChange}
                  className="select select-sm select-primary w-full max-w-xs my-2"
                >
                  <option disabled selected>
                    Choose Time Slot
                  </option>
                  {slot?.length === 0 ? (
                    <option value="">Don't Play game</option>
                  ) : (
                    slot?.map((item, index) => (
                      <option value={item.slot_time} key={index}>
                        {item.time}
                      </option>
                    ))
                  )}
                </select>
                <div className="form-group pb-3">
                  <label
                    for="price"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Amout to pay<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    required
                    placeholder="amount"
                    value={formData.price}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="price"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="price"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Choose Date <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="date"
                  ></input>
                </div>
              </div>
              <div className="flex  justify-end gap-3 mt-5 items-center">
                <button type="submit" className=" btn btn-sm ">
                  Add
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

export default AddAppointment;
