import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="card p-4" style={{ width: "40rem" }}>
      {children}
    </div>
  );
};

export default Wrapper;
