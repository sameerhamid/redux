import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((state) => state.counter);
  return <p className="fs-5 mb-4">Counter current value: {counter}</p>;
};

export default DisplayCounter;
