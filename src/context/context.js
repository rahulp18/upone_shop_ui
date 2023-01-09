import axios from "axios";
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // States

  const url = "http://localhost:5000/api";
  // const url = "https://lively-blue-coat.cyclic.app/api";
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [stafData, setstafData] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : null
  );
  const logOut = (navigate) => {
    localStorage.removeItem("token");
    setUser("");
    setToken("");
    navigate("/login");
  };
  const getCurrentUser = async (navigate) => {
    try {
      setLoading(true);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const res = await axios.get(`${url}/user`);
      console.log(res);
      setUser(res.data.data);
      // fromLngToAddress({
      //   lat: res.data.data.location.lat,
      //   lng: res.data.data.location.lng,
      // });
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Invalid token") {
        logOut(navigate);
        setLoading(false);
      }
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
  return (
    <AppContext.Provider
      value={{
        url,
        loading,
        user,
        setLoading,
        setUser,
        currentUserId,
        setCurrentUserId,
        token,
        setToken,
        getCurrentUser,
        logOut,
        fetchAllStafs,
        stafData,
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
