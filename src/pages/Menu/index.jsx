import React from "react";
import ItemList from "./ItemsList";

const Menu = () => {
  return (
    <div className="bg-contain bg-repeat min-h-[calc(100vh-80px)] bg-[url(/images/menu-bg.png)]">
      <div className="p-6 space-y-4">
        <p className="text-4xl font-semibold uppercase tracking-tighter">
          Menu
        </p>

        <div>
          <ItemList />
        </div>
      </div>
    </div>
  );
};

export default Menu;
