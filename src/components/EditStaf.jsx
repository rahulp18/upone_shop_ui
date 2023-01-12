import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import axios from "axios";
import { toast } from "react-hot-toast";
const EditStaf = ({ staf, fetchStafInfo }) => {
  console.log(staf);
  const initialState = {
    name: staf.name,
    number: staf.number,
    skills: staf.skills,
    experience: staf.experience,
  };
  const [formData, setFormData] = useState(initialState);
  const { url, token } = useGlobalContext();
  const handleChange = (e) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSkills = (e) => {
    const array = e.target.value.trim().toLowerCase().split(",");
    setFormData({ ...formData, skills: array });
  };
  console.log(formData);
  const updateStaf = async (e) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      e.preventDefault();
      const res = await axios.put(`${url}/staf/${staf._id}`, { ...formData });
      console.log(res.data);
      toast.success("Data edited successfully");
      fetchStafInfo();
    } catch (error) {
      console.log(error);
      toast.error("Error updating staf");
    }
  };
  return (
    <div>
      <input type="checkbox" id="editStaf" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="editStaf"
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
                <div className=" flex flex-col gap-2 w-full">
                  <label
                    for="skills"
                    className="block text-sm font-semibold text-gray-800"
                  >
                    Expertise in <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="skills"
                    required
                    value={formData.skills.toString()}
                    onChange={handleSkills}
                    placeholder="spa,haicut,facial (write in comas) "
                    className="input input-bordered text-black  w-full max-w-xs input-sm"
                  />
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
