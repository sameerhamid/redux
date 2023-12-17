import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import counterStore from "../store";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch(counterStore);
  const inputRef = useRef(0);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
    let num = inputRef.current.value;
    if (num == "") {
      return;
    }
    dispatch(counterActions.add(num));
    inputRef.current.value = "";
  };

  const handleSubtract = () => {
    let num = inputRef.current.value;
    if (num == "") {
      return;
    }
    dispatch(counterActions.subtract(num));
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
        <button
          type="button"
          className="btn btn-outline-warning px-4"
          onClick={handlePrivacy}>
          Privacy Toogle
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
