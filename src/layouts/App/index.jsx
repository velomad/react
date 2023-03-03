import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../../components/Cart";
import Drawer from "../../components/Drawer";
import Portal from "../../components/Portal";
import { CartProvider } from "../../context/cart-context";
import Header from "./Header";
import Portals from "./Portals";

const App = () => {
  const [isDrawerOpen, setDrawer] = useState(false);
  const [isCartOpen, setCartOpen] = useState(true);

  return (
    <React.Fragment>
      <div className="fixed w-full z-10 bg-primary-100">
        <Header setDrawer={setDrawer} />
      </div>

      <div>
        <Drawer
          height={"80px"}
          isDrawerOpen={isDrawerOpen}
          setDrawer={setDrawer}
        >
          Drawer Content
        </Drawer>
      </div>

      <CartProvider>
        <div className={`mt-[80px] ${isCartOpen && "mb-20"} `}>
          <Outlet />
        </div>

        <Portals shouldCartVisible={(val) => setCartOpen(val)} />
      </CartProvider>
    </React.Fragment>
  );
};

export default App;
