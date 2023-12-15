import React from "react";

const Controls = () => {
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-outline-info px-4 me-sm-3 fw-bold">
        Custom button
      </button>
      <button type="button" className="btn btn-outline-danger px-4">
        Secondary
      </button>
    </div>
  );
};

export default Controls;
