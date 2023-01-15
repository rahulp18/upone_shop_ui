import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { MdWifiCalling2 } from "react-icons/md";
import { RiShareCircleFill } from "react-icons/ri";
import { useGlobalContext } from "../context/context";
import { slot } from "../utils/slot";
import Loading from "./Loading";

const PendingCard = ({ data }) => {
  const {
    fetchSingleStaf,
    barber,
    loading,
    url,
    fetchAppointments,
    fetchSlotInfo,
    slotInfo,
  } = useGlobalContext();

  useEffect(() => {
    fetchSingleStaf(data.stafId);
    fetchSlotInfo(data.slots);
  }, []);

  const [updating, setUpdating] = useState(false);
  const handleRequest = async (id, status) => {
    console.log(status);
    try {
      setUpdating(true);
      const res = await axios.put(`${url}/appointments/update/${id}`, {
        status: status,
      });
      toast.success(`${status} request`);
      console.log(res);
      setUpdating(false);
      fetchAppointments("pending");
    } catch (error) {
      console.log(error);
      setUpdating(false);
    }
  };
  console.log(data);
  if (loading) {
    return <Loading />;
  }
  console.log(slotInfo);
  return (
    <div className="flex shadow-lg w-[100%] max-w-lg rounded-lg ">
      <div className="basis-1/3 bg-sky-400 text-white px-2 py-4">
        <div className="flex items-center justify-center h-full gap-3 flex-col">
          <h1 className="text-xl font-semibold font-roboto ">
            {slotInfo?.slot_date}
          </h1>
          <h1 className="text-sm font-normal font-roboto ">
            {" "}
            {
              slot.filter(function (el) {
                return el.slot_time == slotInfo?.slot_time;
              })[0]?.time
            }
          </h1>
        </div>
      </div>

      <div className="basis-2/3 h-full  bg-white px-2 py-4">
        <h1 className="text-lg uppercase text-gray-700 font-semibold font-roboto ">
          {data?.name}
        </h1>
        <div className="flex justify-between items-start">
          <h1 className="text-md capitalize text-gray-700 font-semibold font-roboto ">
            Barber :
          </h1>
          <div className="">
            <h1 className="text-md capitalize text-gray-700 font-normal font-roboto ">
              {barber?.name}
            </h1>
            <h1 className="text-sm capitalize text-gray-700 font-normal font-roboto ">
              {data.services.toString()}
            </h1>
            {/* <h1 className="text-sm capitalize text-gray-700 font-semibold font-roboto ">
              ₹120
            </h1> */}
          </div>
        </div>
        <div className="flex justify-between items-center mt-3 ">
          <button
            onClick={() => handleRequest(data._id, "rejected")}
            className="text-red-500 font-bold bg-red-50 border-none px-3 py-2 rounded-lg text-sm"
          >
            {updating ? <Loading /> : "Reject"}
          </button>
          <button
            onClick={() => handleRequest(data._id, "approved")}
            className="text-green-500 font-bold bg-green-50 border-none px-3 py-2 rounded-lg text-sm"
          >
            {updating ? <Loading /> : "Approve"}
          </button>
          <div className="flex gap-2 items-center justify-center">
            <div className="bg-sky-100 p-1 rounded-md">
              <a href={`tel:${data.phone}`}>
                <MdWifiCalling2 className="font-semibold text-xl text-sky-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingCard;
