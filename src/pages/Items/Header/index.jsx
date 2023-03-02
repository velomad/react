import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const paths = location.pathname?.split("/");

  return (
    <div>
      <div className="relative item-header flex justify-center items-center ">
        <p className="text-white font-semibold text-3xl text-center uppercase">
          {decodeURIComponent(paths[paths.length - 1])}
        </p>
        <div
          onClick={() => navigate(-1)}
          className="absolute -bottom-6 left-2 h-12 w-12 bg-secondary rounded-full flex justify-center items-center"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
