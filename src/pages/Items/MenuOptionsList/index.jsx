import React from "react";
import { motion } from "framer-motion";
import { categorys } from "../../../../data.json";

const MenuOptionsList = () => {
  return (
    <div className="bg-primary-100 p-4 space-y-4">
      {categorys.map((category, index) => {
        return (
          <motion.h1
            initial={{ y: -10, opacity: 0 }}
            animate={{
              y: 10,
              transition: { delay: `0.0${index}000` },
              opacity: 1,
            }}
            key={category.id}
            className="text-primary text-center font-bold text-3xl uppercase "
          >
            {category.name}
          </motion.h1>
        );
      })}
    </div>
  );
};

export default MenuOptionsList;
