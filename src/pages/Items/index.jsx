import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Item from "./Item";
import MenuOptionsList from "./MenuOptionsList";

const Items = () => {
  const [isMenuOptionsOpen, setMenuOptions] = useState(false);

  const { state } = useLocation();


  return (
    <div>
      <Header
        isMenuOptionsOpen={isMenuOptionsOpen}
        setMenuOptions={setMenuOptions}
      />

      {isMenuOptionsOpen ? (
        <MenuOptionsList />
      ) : (
        <div className="space-y-4 p-4">
          {state.items.map((item) => {
            return <Item item={item} key={item.id.toString()} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Items;
