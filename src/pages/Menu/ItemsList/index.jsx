import React from "react";
import Item from "../Item";
import { categorys } from "../../../../data.json";

const ItemList = () => {
  return (
    <div className="space-y-8">
      {categorys.map((category, index) => {
        return <Item category={category} key={category.id.toString()} />;
      })}
    </div>
  );
};

export default ItemList;
