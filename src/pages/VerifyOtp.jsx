import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../context/context";
import { Toaster, toast } from "react-hot-toast";
import { Loading } from "../components";
const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState();
  const { currentUserId, setToken, url, setLoading, token, loading } =
    useGlobalContext();

  useEffect(() => {
    if (token) {
      navigate("/location");
    }
  }, [token]);
  const verifyOtp = async () => {
    if (!otp) return toast.error("Fill Otp");
    try {
      if (!currentUserId) {
        toast.error("Send Otp again");
        return;
      }
      setLoading(true);
      const body = {
        userId: currentUserId,
        otp: otp,
      };
      const res = await axios.post(`${url}/shop/verifyOtp`, body);
      console.log(res);
      setToken(res.data.data.token);

      localStorage.setItem("token", res.data.data.token);
      setLoading(false);
      navigate("/location");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-white px-6 py-5">
      <Toaster />
      <div className="flex gap-3 items-center justify-start">
        <div className="p-1 bg-sky-500 rounded-full text-white cursor-pointer">
          <FiArrowLeft
            className="text-xl font-bold"
            onClick={() => navigate("/login")}
          />
        </div>
        <h1
          className="text-md font-semibold font-poppins text-black cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login/Signup
        </h1>
      </div>
      <div className="mt-[8rem]">
        <h1 className="text-[26px] text-center font-poppins font-bold text-gray-700">
          Enter Verification Code
        </h1>
        <p className="mb-12 mt-4 font-normal  text-center text-lg font-roboto text-gray-500">
          we have sent you a 6 digit verification code
        </p>
        <div className="mt-5 flex gap-2 items-center justify-center">
          <input
            type="number"
            value={otp}
            required
            onChange={(e) => setOtp(e.target.value)}
            className="p-3 text-lg max-w-sm w-full text-black placeholder-slate-400 bg-gray-100 text-center rounded-xl border-2 border-gray-600"
            placeholder="Enter OTP"
          />
        </div>
        <button
          onClick={verifyOtp}
          className="btn mt-12 w-full max-w-sm text-md bg-sky-500 border-none transition-all duration-100 hover:bg-sky-600"
        >
          {loading ? <Loading /> : "Verify"}
        </button>
      </div>
    </div>
  );
};

export default VerifyOtp;
