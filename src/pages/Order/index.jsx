import React from "react";
import { useCart } from "@/context/cart-context";
import Price from "../../components/Price";
import Button from "../../components/Button";

const Order = () => {
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    getItemQuantity,
  } = useCart();

  return (
    <div className="">
      <div className="bg-white p-4  space-y-4">
        <h1 className="text-primary font-semibold text-center">Your Order</h1>
        <hr className="bg-gray-300" />

        <div className="space-y-6">
          {cartItems.map((item) => {
            const quantity = getItemQuantity(item.id);

            return (
              <div className="flex justify-between space-y-1">
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <Price cost={item.price} />
                </div>

                <div>
                  {quantity === 0 ? (
                    <Button
                      as="addToCart"
                      onClick={() => increaseCartQuantity(item)}
                    >
                      <div>
                        Add
                        <sup>+</sup>
                      </div>
                    </Button>
                  ) : (
                    <Button as="addToCart">
                      <div className="flex justify-between">
                        <div onClick={() => decreaseCartQuantity(item)}>
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
                              d="M18 12H6"
                            />
                          </svg>
                        </div>
                        <div>{quantity}</div>
                        <div onClick={() => increaseCartQuantity(item)}>
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
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Order;
