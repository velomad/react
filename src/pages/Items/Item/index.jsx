import React from "react";
import Button from "../../../components/Button";
import { useCart } from "../../../context/cart-context";

const Item = ({ item }) => {
  const {
    cartItems,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useCart();

  console.log(cartItems);

  const quantity = getItemQuantity(item.id);

  return (
    <div className="flex h-40 items-center">
      <div className="flex space-x-2 w-full">
        <div className="w-full space-y-2 flex flex-col justify-between">
          <div>
            <div className="uppercase text-primary font-semibold">
              {item.name}
            </div>

            <div className="text-xs">{item.description}</div>
          </div>

          {item?.price && (
            <div className="flex space-x-1 items-center font-semibold text-gray-500 text-md">
              <div>&#x20b9;</div>
              <div>{item?.price}</div>
            </div>
          )}
        </div>

        <div>
          <div className="relative">
            <div>
              <img
                src="/images/dish.png"
                alt="dish"
                className="w-[200px] rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 left-4">
              {quantity === 0 ? (
                <Button
                  as="addToCart"
                  onClick={() => increaseCartQuantity(item.id)}
                >
                  <div>
                    Add
                    <sup>+</sup>
                  </div>
                </Button>
              ) : (
                <Button as="addToCart">
                  <div className="flex justify-between">
                    <div onClick={() => decreaseCartQuantity(item.id)}>
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
                    <div onClick={() => increaseCartQuantity(item.id)}>
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
        </div>
      </div>
    </div>
  );
};

export default Item;
