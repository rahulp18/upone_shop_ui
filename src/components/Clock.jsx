import React, { useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setClock(new Date().toLocaleTimeString());
  }, 1000);
  return <h1 className="text-md font-semibold text-sky-600">{clock}</h1>;
};

export default Clock;
