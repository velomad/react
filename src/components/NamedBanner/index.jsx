import React from "react";
import { Link } from "react-router-dom";

const NamedBanner = () => {
  return (
    <Link to={'/app'}>
      <div className="space-y-1 text-center">
        <p className="text-4xl font-bold tracking-tighter	">ABLAZE</p>
        <p className="text-xs tracking-wider	">FOOD, DRINK & HOOKAH LOUNGE </p>
      </div>
    </Link>
  );
};

export default NamedBanner;
