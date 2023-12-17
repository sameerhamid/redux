import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((state) => state.counter);
  return <p className="fs-5 mb-4">Counter current value: {counterVal}</p>;
};

export default DisplayCounter;
