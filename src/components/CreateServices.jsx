import React, { useState } from "react";

const CreateServices = () => {
  const initialState = {
    serviceName: "",
    price: "",
    image: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [formData.name]: e.target.value });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add Services</h3>
          <div className="mt-2">
            <form>
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
                    className="block w-full input-bordered  px-4 py-2 mt-2 bg-white border rounded-md"
                    id="name"
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
                    className="block w-full px-4 py-2 mt-2 bg-white border rounded-md"
                    id="price"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="image"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Image<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    name="experience"
                    required
                    className="text-sm"
                    id="image"
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

export default CreateServices;
