import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Loading, MobileNumberInput } from "../components";
import { useGlobalContext } from "../context/context";
const Login = () => {
  const initialState = {
    phone: "",
  };
  const navigate = useNavigate();
  const { setCurrentUserId, url, setLoading, loading, token } =
    useGlobalContext();
  const [formData, setFormData] = useState(initialState);
  const loginSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post(`${url}/shop/login`, {
        phone: formData.phone,
      });
      setCurrentUserId(res.data.data.userId);
      console.log(res);
      setLoading(false);
      navigate("/verifyotp");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token]);
  return (
    <div className="h-screen flex items-start justify-center bg-white ">
      <div className="w-[90%] h-auto mt-[6rem] px-6 ">
        <h1 className="flex text-[45px] font-poppins text-center items-center justify-center font-semibold text-sky-500">
          Up
          <img src={logo} alt="logo" className="h-14 w-14 object-cover" />{" "}
          <span className="text-sky-700  font-poppins font-bold">One</span>
        </h1>
        <div className="flex gap-2 items-center justify-center font-roboto mt-3">
          <p className="font-semibold text-[16px] text-black font-poppins">
            Find .
          </p>
          <p className="font-semibold text-[16px] text-black font-poppins">
            Book .
          </p>
          <p className="font-semibold text-[16px] text-black font-poppins">
            Experience
          </p>
        </div>
        <h1 className="mt-[5rem] mb-4 font-semibold  text-center text-md font-poppins text-gray-600">
          Enter mobile number to get one time password
        </h1>
        <div className="mt-6">
          <MobileNumberInput formData={formData} setFormData={setFormData} />
          <div className="flex flex-col items-center justify-center gap-3 mt-14">
            <button
              onClick={loginSubmit}
              className="btn w-full max-w-sm text-md btn-md bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
            >
              {loading ? <Loading /> : "Get otp"}
            </button>
            <button className="btn btn-outline w-full text-md max-w-sm text-sky-500 ">
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
