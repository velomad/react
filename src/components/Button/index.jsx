import React from "react";

const Button = ({ children, as, onClick, background }) => {
  const Btn = ({ classes }) => (
    <button
      onClick={onClick}
      className={`${classes ? classes : ""} focus:outline-none ${
        background ? background : ""
      }`}
    >
      {children}
    </button>
  );

  switch (as) {
    case "addToCart":
      return (
        <Btn
          classes={
            "uppercase text-white py-1 w-24 rounded-md font-semibold text-md bg-secondary"
          }
        />
      );

    default:
      return <Btn />;
  }
};

export default Button;
