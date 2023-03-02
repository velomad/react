import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Item from "./Item";

const Items = () => {
  const { state } = useLocation();

  return (
    <div>
      <Header />

      <div className="space-y-4 p-4">
        {state.items.map((item) => {
          return <Item item={item} key={item.id.toString()} />;
        })}
      </div>
    </div>
  );
};

export default Items;
