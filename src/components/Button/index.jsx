import React from "react";

const Button = ({ children, as, onClick }) => {
  const Btn = ({ classes }) => (
    <button
      onClick={onClick}
      className={
        classes + " focus:outline-none border border-2 border-secondary"
      }
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
      return <button>{children}</button>;
  }
};

export default Button;
