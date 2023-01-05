import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Appointments,
  ChooseLocation,
  Home,
  Login,
  Profile,
  ServiceDetail,
  SignUp,
  Staf,
  VerifyOtp,
  Welcome,
} from "./pages";
const App = () => {
  return (
    <div>
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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
