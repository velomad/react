import React from "react";

const Price = ({ cost }) => {
  return (
    <div className="flex items-center space-x-1">
      <div>&#x20b9;</div>
      <div>{cost}</div>
    </div>
  );
};

export default Price;
