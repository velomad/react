import React from "react";
import { Link } from "react-router-dom";

const Item = ({ category }) => {
  return (
    <div>
      <Link
        to={"/app/menu/" + category.name}
        state={{ items: category["menu-items"] }}
      >
        <div className=" elem flex justify-center items-center ">
          <p className="text-white font-semibold text-3xl text-center uppercase">
            {category.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
