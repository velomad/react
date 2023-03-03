import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/cart-context";
const Cart = () => {
  const { pathname } = useLocation();
  const { cartTotal, cartQuantity } = useCart();

  const isCartPage = pathname == "/app/order";

  return (
    <div className="p-4 bg-primary flex justify-between items-center text-white">
      <div>
        <div className="text-xs">
          {cartQuantity} items {!isCartPage && "added"}{" "}
        </div>
        <div className="font-semibold">
          <div className="flex space-x-1">
            <div>&#x20b9;</div>
            <div>{cartTotal()}</div>
          </div>
        </div>
      </div>

      <Link to={!isCartPage && "/app/order"}>
        <div className="flex items-center space-x-1">
          <h2>{isCartPage ? "Place order" : "Next"}</h2>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
