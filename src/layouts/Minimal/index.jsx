import React from "react";
import { Outlet } from "react-router-dom";

const Minimal = () => {
  return (
    <div>
      <div>Minimal</div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Minimal;
