import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import counterStore from "../store";

const Controls = () => {
  const dispatch = useDispatch(counterStore);
  const inputRef = useRef(0);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    let num = inputRef.current.value;
    if (num == "") {
      return;
    }
    dispatch({
      type: "ADD",
      payload: {
        num,
      },
    });
    inputRef.current.value = "";
  };

  const handleSubtract = () => {
    let num = inputRef.current.value;
    if (num == "") {
      return;
    }
    dispatch({
      type: "SUB",
      payload: {
        num,
      },
    });
    inputRef.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-info px-4 me-sm-3 fw-bold"
          onClick={handleIncrement}>
          INCREMENT +1
        </button>
        <button
          type="button"
          className="btn btn-outline-danger px-4"
          onClick={handleDecrement}>
          DECREMENT -1
        </button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <input
          type="number"
          placeholder="Enter the number"
          ref={inputRef}
          className="px-3"
        />
        <button type="button" className="btn btn-info px-4" onClick={handleAdd}>
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger px-4"
          onClick={handleSubtract}>
          SUBTRACT
        </button>
      </div>
    </>
  );
};

export default Controls;
