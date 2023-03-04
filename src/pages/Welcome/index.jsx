import React from "react";
import NamedBanner from "@/components/NamedBanner";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="py-8 flex flex-col justify-between items-center h-full">
      <div>
        <div>
          <NamedBanner />
        </div>
        <img className="mx-auto  w-full" src="images/home.png" alt="Cheers" />
      </div>

      <div>
        <div className="text-center">
          <p className="italic text-4xl">Welcome to</p>
          <p className="text-4xl font-bold tracking-tighter uppercase ">
            Ablaze
          </p>
        </div>
      </div>

      <div className="">
        <Link to={"/app"}>
          <button className="bg-secondary text-white h-14 w-14 rounded-full flex items-center justify-center">
            <span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
