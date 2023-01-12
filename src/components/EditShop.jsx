import React, { useState } from "react";

const EditShop = ({ owoner }) => {
  const initialState = {
    shopName: owoner?.shopName,
    phone: owoner?.number,
    image: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
            <form>
              <div className="flow-root">
                <div className="form-group pb-3">
                  <label
                    for="name"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Shop Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
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
                    Phone<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="price"
                    placeholder="+919777160598"
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
                    multiple
                    name="image"
                    required
                    className="text-sm"
                    id="image"
                  ></input>
                </div>
              </div>
              <div className="flex  justify-end gap-3 mt-5 items-center">
                <button type="submit" className=" btn btn-sm ">
                  Update
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
