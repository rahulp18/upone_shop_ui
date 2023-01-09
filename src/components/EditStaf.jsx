import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { toast } from "react-hot-toast";
const EditStaf = ({ staf }) => {
  const initialState = {
    name: staf.name,
    number: staf.number,

    experience: staf.experience,
  };
  const [formData, setFormData] = useState(initialState);
  const { url, token, fetchAllStafs } = useGlobalContext();
  const handleChange = (e) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const updateStaf = async (e, id) => {
    try {
      e.preventDefault();
      const res = await axios.put(`${url}/staf/${id}`, { ...formData });
      console.log(res.data);
      toast.success("Data edited successfully");
      fetchAllStafs();
    } catch (error) {
      console.log(error);
      toast.error("Error updating staf");
    }
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Update Your Staf Info</h3>
          <div className="mt-2">
            <form onSubmit={(e) => updateStaf(e, staf._id)}>
              <div className="flow-root">
                <div className="form-group pb-3">
                  <label
                    for="jobTitle"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Staf Name <span className="text-red-600">*</span>
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
                    Contact Info<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="number"
                    required
                    value={formData.number}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="number"
                  ></input>
                </div>
                <div className="form-group pb-3">
                  <label
                    for="experience"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Experience<span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                    id="experience"
                  ></input>
                </div>
              </div>
              <div className="flex  justify-end gap-3 mt-5 items-center">
                <button className=" btn btn-sm " type="submit">
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

export default EditStaf;
