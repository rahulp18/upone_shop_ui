import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Loading, MobileNumberInput } from "../components";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { toast, Toaster } from "react-hot-toast";
import { BsCameraFill } from "react-icons/bs";
const initialState = {
  shopName: "",
  phone: "",
  email: "",
};

const SignUp = () => {
  const { url, setCurrentUserId, setLoading, loading, token } =
    useGlobalContext();
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Handle Image

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImages((oldArray) => [...oldArray, reader.result]);
      };
    });
  };

  const handleImageChange = (e) => {
    handleImages(e);
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.post(`${url}/shop/register`, {
        ...formData,
        images,
      });
      console.log(res);
      setCurrentUserId(res.data.data.userId);
      navigate("/verifyOtp");
      setLoading(false);
    } catch (error) {
      console.log(error?.response?.data?.message);
      console.log(error);
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };
  console.log(selectedFiles);
  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return (
        <img
          src={photo}
          alt="hm"
          key={photo}
          className="w-14 h-14 object-cover"
        />
      );
    });
  };
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);
  return (
    <div className="h-screen px-4 py-2">
      <Toaster />
      <div className="flex items-center justify-center">
        <h1 className="flex text-[26px] font-poppins text-center items-center justify-start font-semibold text-sky-500">
          Up
          <img src={logo} alt="logo" className="h-12 w-12 object-cover" />{" "}
          <span className="text-sky-700  font-poppins font-bold">One</span>
        </h1>
      </div>
      <div className="flex flex-col gap-3 mt-10">
        <h1 className="text-lg font-semibold text-gray-700">
          Register your Shop!
        </h1>
        <form
          action=""
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-3"
        >
          <input
            type="text"
            value={formData.shopName}
            required
            onChange={(e) =>
              setFormData({ ...formData, shopName: e.target.value })
            }
            placeholder="Enter Shop Name"
            className="input input-bordered text-black  w-full max-w-xs"
          />
          <input
            type="email"
            value={formData.email}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Enter Email Address"
            className="input input-bordered text-black  w-full max-w-xs"
          />
          <MobileNumberInput formData={formData} setFormData={setFormData} />
          <div className="mt-4">
            <input
              type="file"
              id="images"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="label-holder">
              <label
                htmlFor="images"
                className="btn capitalize  text-center gap  btn-sm bg-sky-600 border-none"
              >
                <BsCameraFill className="mx-1" /> Choose Image
              </label>
            </div>
            <div className="flex mt-3  flex-wrap gap-2 items-center">
              {renderPhotos(selectedFiles)}
            </div>
          </div>
          <button className="btn btn-outline  w-full text-[16px] py-2 max-w-sm  mt-6">
            {loading ? <Loading /> : "Get Otp"}
          </button>
        </form>
        <h1 className="text-sm font-roboto text-gray-400">
          Already have an account !{" "}
          <span
            className="text-sky-600 font-semibold cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
