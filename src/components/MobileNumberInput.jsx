import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
const MobileNumberInput = ({ setFormData, formData }) => {
  // console.log(value);
  // setFormData({ ...formData, phone: value });
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e })}
      className="text-md max-w-xs input input-bordered shadow-sm"
    />
  );
};

export default MobileNumberInput;
