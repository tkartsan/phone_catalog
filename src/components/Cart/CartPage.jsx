import React from 'react';

import { usePhoneStore } from '../../store';

export const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity } = usePhoneStore();

  const totalPrice = cart.reduce(
    (acc, purchase) =>
      acc +
      (purchase.priceDiscount || purchase.priceRegular) *
        (purchase.quantity || 1),
    0,
  );
  const totalItems = cart.reduce(
    (acc, purchase) => acc + (purchase.quantity || 1),
    0,
  );

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col mb-6">
        <h1 className="text-[48px] font-bold">Cart</h1>
      </div>
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {cart.map((purchase) => (
              <div
                key={purchase.id}
                className="flex items-center justify-between border-solid border-colorDifferentGrey p-4 mb-4"
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(purchase.id)}
                    className="text-bgColorLightGrey hover:text-bgColorGrey"
                  >
                    &#10005;
                  </button>
                  <img
                    src={`/${purchase.images[0]}`}
                    alt={purchase.name}
                    className="w-20 h-20 object-contain rounded-md"
                  />
                  <div>
                    <h3 className="font-mont text-[14px] leading-[21px] text-left">
                      {purchase.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center border px-3 py-1 rounded-md">
                    <button
                      className="text-gray-700 border-solid border-colorLightGrey w-8 h-8 justify-center"
                      onClick={() =>
                        updateCartQuantity(
                          purchase.id,
                          Math.max((purchase.quantity || 1) - 1, 1),
                        )
                      }
                    >
                      -
                    </button>
                    <span className="px-3">{purchase.quantity || 1}</span>
                    <button
                      className="text-gray-700 border-solid border-colorLightGrey w-8 h-8 justify-center"
                      onClick={() =>
                        updateCartQuantity(
                          purchase.id,
                          (purchase.quantity || 1) + 1,
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xl font-bold">
                    $
                    {(purchase.priceDiscount || purchase.priceRegular) *
                      (purchase.quantity || 1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/3">
            <div className="border-solid border-colorDifferentGrey p-6 ">
              <div className="flex flex-col align-center justify-center mb-3">
                <div className="flex justify-center text-[32px] font-extrabold">
                  ${totalPrice}
                </div>
                <div className="flex justify-center text-[14px] font-medium text-colorDifferentGrey">
                  Total for {totalItems} {totalItems > 1 ? 'items' : 'item'}
                </div>
              </div>
              <div className="w-full h-[1px] bg-colorDifferentGrey"></div>
              <button className="w-full mt-6 bg-black text-white py-3 hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};
