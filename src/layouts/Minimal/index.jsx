import React from "react";
import { Outlet } from "react-router-dom";

const Minimal = () => {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default Minimal;
