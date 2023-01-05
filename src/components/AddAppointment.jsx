import React, { useState } from "react";

const AddAppointment = () => {
  const initialState = {
    name: "",
    phone: "",
    service: "",
    staf: "",
    time: "",
    date: "",
    price: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
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
            <form>
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
                <div className="form-group pb-3">
                  <label
                    for="phone"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Service<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="experience"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="service name"
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="service"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="staf"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Barber<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="staf"
                    required
                    value={formData.staf}
                    onChange={handleChange}
                    placeholder="staf name"
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="staf"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="price"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Amout to pay<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="amount"
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
                    Choose Date & Time<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="datetime-local"
                    name="amount"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="price"
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
