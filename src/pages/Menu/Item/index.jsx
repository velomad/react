import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ category, index }) => {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 10, transition: { delay: `0.${index}`, }, opacity : 1 }}
    >
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
    </motion.div>
  );
};

export default Item;
