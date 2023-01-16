import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Appointments,
  ChooseLocation,
  CollectOverView,
  Home,
  Login,
  Profile,
  ServiceDetail,
  SignUp,
  Staf,
  StafDetail,
  VerifyOtp,
  Welcome,
} from "./pages";
const App = () => {
  return (
    <div>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stafs" element={<Staf />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="/location" element={<ChooseLocation />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/staf/:id" element={<StafDetail />} />
          <Route path="/overview" element={<CollectOverView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
