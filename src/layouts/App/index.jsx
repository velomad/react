import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../../components/Cart";
import { CartProvider } from "../../context/cart-context";
import Header from "./Header";

const App = () => {
  const [isCartOpen, setCartOpen] = useState(true);

  return (
    <React.Fragment>
      <div className="fixed w-full z-10 bg-primary-100">
        <Header />
      </div>

      <CartProvider>
        <div className={`mt-[80px] ${isCartOpen && "mb-20"} `}>
          <Outlet />
        </div>

        {isCartOpen && (
          <div className="fixed bottom-0 w-full">
            <Cart setCartOpen={setCartOpen} />
          </div>
        )}
      </CartProvider>
    </React.Fragment>
  );
};

export default App;
