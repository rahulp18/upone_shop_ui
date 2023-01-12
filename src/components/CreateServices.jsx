import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useGlobalContext } from "../context/context";
import Loading from "./Loading";

const CreateServices = ({ fetchService }) => {
  const initialState = {
    serviceName: "",
    price: "",
    image: "",
  };
  const [formData, setFormData] = useState(initialState);
  const { owoner, url, token } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const addService = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post(`${url}/service`, formData);
      console.log(response);
      setLoading(false);
      toast.success("Srevice added successfully");
      setFormData(initialState);
      fetchService();
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        // console.log(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
    });
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
            <form onSubmit={addService}>
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
                    id="serviceName"
                    placeholder="Spa / hair cut"
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
                    placeholder="Price"
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
                    name="image"
                    required
                    onChange={handleImages}
                    className="text-sm"
                    id="image"
                  ></input>
                </div>
              </div>
              <div className="flex  justify-end gap-3 mt-5 items-center">
                <button type="submit" className=" btn btn-sm ">
                  {loading ? <Loading /> : "Add"}
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
