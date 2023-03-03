import React from "react";
import { categorys } from "../../../../data.json";

const MenuOptionsList = () => {
  return (
    <div className="bg-primary-100 p-4 space-y-4">
      {categorys.map((category, index) => {
        return (
          <h1
            key={category.id}
            className="text-primary text-center font-bold text-3xl uppercase "
          >
            {category.name}
          </h1>
        );
      })}
    </div>
  );
};

export default MenuOptionsList;
