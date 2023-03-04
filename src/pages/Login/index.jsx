import React from "react";
import { Link } from "react-router-dom";
import NamedBanner from "@/components/NamedBanner";

const Login = () => {
  return (
    <div className="text-center py-8 flex flex-col justify-between  h-full">
      <div>
        <NamedBanner />

        <p className="text-4xl py-8 font-bold">Hola Peeps!</p>

        <img
          className="mx-auto  w-full"
          src="images/home.png"
          alt="Cheers"
        />
        <p className="text-4xl mt-12 font-semibold italic">
          Explore our <br /> offerings, <br /> we hope you’ll <br /> love it..!
        </p>
      </div>

      <div >
        <Link to={'/ablaze'} >
          <button className="flex space-x-2 mx-auto bg-white py-4 px-6 rounded-full">
            <span>
              <img src="/images/Google.svg" alt="Google icon" />
            </span>
            <div>LOG IN WITH GOOGLE</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
