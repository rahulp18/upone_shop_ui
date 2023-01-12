import axios from "axios";
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // States

  const url = "http://localhost:5000/api";
  // const url = "https://lively-blue-coat.cyclic.app/api";
  const [loading, setLoading] = useState(false);
  const [appoinemts, setAppoinemts] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [stafData, setstafData] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const [owoner, setOwoner] = useState(null);
  const [barber, setBarber] = useState(null);
  const [slotInfo, setSlotInfo] = useState(null);

  const logOut = (navigate) => {
    localStorage.removeItem("token");
    setOwoner("");
    setToken("");
    navigate("/login");
  };

  const fetchSlotInfo = async () => {
    try {
      const res = await axios.get(`${url}/`);
    } catch (error) {}
  };

  const checkToken = async (navigate) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/auth/verifyToken/${token}`);
      console.log(res);
    } catch (error) {
      logOut(navigate);
      console.log(error);
    }
  };

  const fetchAllStafs = async () => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/staf`);
      setstafData(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // Get Shop owoner data
  const getShopOwoner = async () => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/shop`);
      setOwoner(res.data.data);
      console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchAppointments = async (status) => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/appointments/${status}`);
      console.log(res);
      setAppoinemts(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchSingleStaf = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/staf/${id}`);
      setBarber(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const [shopInfo, setShopInfo] = useState(null);
  const fetchShopInfo = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${url}/shop/${id}`);
      console.log(res);
      setShopInfo(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        url,
        loading,
        owoner,
        setLoading,
        getShopOwoner,
        currentUserId,
        setCurrentUserId,
        token,
        setToken,
        logOut,
        fetchAllStafs,
        stafData,
        checkToken,
        fetchAppointments,
        appoinemts,
        fetchSingleStaf,
        barber,
        fetchShopInfo,
        shopInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
