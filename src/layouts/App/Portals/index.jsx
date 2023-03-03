import React, { useState, useEffect } from "react";
import Cart from "../../../components/Cart";
import Portal from "../../../components/Portal";
import { useCart } from "../../../context/cart-context";

const Portals = ({ shouldCartVisible }) => {
  const { cartQuantity } = useCart();

  useEffect(() => {
    shouldCartVisible(cartQuantity > 0);
  }, [cartQuantity]);

  return (
    <div>
      {cartQuantity > 0 && (
        <Portal rootId={"cart"}>
          <div className="fixed bottom-0 w-full">
            <Cart />
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Portals;
