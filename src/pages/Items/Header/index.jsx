import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useScrollDirection from "@/hooks/useScrollDirection";

const Header = ({ setMenuOptions, isMenuOptionsOpen }) => {
  const location = useLocation();
  const scrollDirection = useScrollDirection();

  const paths = location.pathname?.split("/");

  return (
    <div className="sticky">
      <div className="relative item-header flex justify-center items-center ">
        <div>
          <p className="text-white font-semibold text-3xl text-center uppercase">
            {decodeURIComponent(paths[paths.length - 1])}
          </p>
        </div>
        <div
          onClick={() => setMenuOptions(!isMenuOptionsOpen)}
          className="absolute -bottom-6 right-2 h-12 w-12 bg-secondary rounded-full flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 2`4"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOptionsOpen
                  ? `M4.5 15.75l7.5-7.5 7.5 7.5`
                  : "M19.5 8.25l-7.5 7.5-7.5-7.5"
              }
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
