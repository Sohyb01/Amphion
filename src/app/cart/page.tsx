"use client";

import Image from "next/image";
import { ShopContext } from "../context/ShopContext";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
import { useContext } from "react";

function Shop() {
  // Get the context data, which includes the total price
  const shopContext = useContext(ShopContext);

  const checkoutData = {
    description: "Amphion Checkout",
    price: shopContext?.totalPrice,
  };
  return (
    <main className="container-all min-h-[100vh] bg-neutral-100 pt-[120px] lg:pt-[180px] pb-[100px]">
      <div className="text-md text-neutral-800 hidden lg:block text-start pb-4 section__styles">
        Your cart ({shopContext?.cart.length} items)
      </div>
      <section className="z-10  flex flex-col lg:flex-row-reverse items-start gap-8 section__styles">
        {/* Order summary part */}
        <div className="flex flex-col text-center gap-4 p-8 w-full bg-white shadow-effect lg:max-w-[300px] xl:max-w-[416px]">
          <div className="text-lg text-start text-neutral-800">
            Order Summary
          </div>
          {/* divider */}
          <div className="w-full bg-neutral-300 h-[1px] rounded-full"></div>
          {/* Order details */}
          <div className="flex flex-col gap-2 text-start">
            {/* Subtotal */}
            <div className="flex w-full justify-between text-sm">
              <p className="text-neutral-500">Subtotal</p>
              <p className="text-neutral-800">${shopContext?.totalPrice}</p>
            </div>
            {/* Shipping */}
            <div className="flex w-full justify-between text-sm">
              <p className="text-neutral-500">Shipping</p>
              <p className="text-neutral-800">FREE</p>
            </div>
            {/* Discounts */}
            <div className="flex w-full justify-between text-sm">
              <p className="text-neutral-500">Sales discount(s)</p>
              <p className="text-neutral-800">$0</p>
            </div>
            <div className="flex w-full justify-between text-sm">
              <p className="text-neutral-500">Total Savings</p>
              <p className="text-neutral-800">$0</p>
            </div>
            <div className="flex w-full justify-between text-sm">
              <p className="text-neutral-500">Tax</p>
              <p className="text-neutral-800">—</p>
            </div>
          </div>
          {/* divider */}
          <div className="w-full bg-neutral-300 h-[1px] rounded-full"></div>
          {/* Secure checkout section */}
          <div className="flex flex-col w-full gap-2">
            {/* Total and label */}
            <div className="flex w-full justify-between text-md text-neutral-800">
              <p>Order total:</p>
              <p>${shopContext?.totalPrice}</p>
            </div>
            {/* Checkout button */}
            <PaypalCheckoutButton
              checkoutData={checkoutData}
            ></PaypalCheckoutButton>

            {/* <div className="flex items-center justify-center gap-2 bg-blue-500 text-white text-sm px-8 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
              >
                <path
                  d="M17.1429 10.0397L16.4286 10.0802V6.48014C16.4286 2.90661 13.5451 0 10 0C6.45491 0 3.57143 2.90661 3.57143 6.48014V10.0802L2.85714 10.0397C1.27902 10.0397 0 11.329 0 12.9198V20.1199C0 21.7103 1.27902 23 2.85714 23H17.1429C18.721 23 20 21.7103 20 20.1199V12.9198C20 11.3717 18.7188 10.0397 17.1429 10.0397ZM6.42857 6.48014C6.42857 4.4947 8.03125 2.88006 10 2.88006C11.9688 2.88006 13.5714 4.4947 13.5714 6.48014V10.0802H6.42857V6.48014Z"
                  fill="white"
                />
              </svg>
              Secure Checkout
            </div> */}
          </div>
          {/* Paypal checkout section */}
          {/* <div className="flex flex-col gap-2 items-center text-center p-4 bg-slate-100 border-[2px] border-neutral-200 border-solid">
            <p className="text-sm text-neutral-500">Express checkout</p>
            <button className="bg-yellow-500 text-blue-800 text-md font-bold italic text-center w-full px-8 py-2">
              PayPal
            </button>
          </div> */}
        </div>
        {/* Ordered products and label*/}
        <div className="flex flex-col items-center w-full gap-4">
          {/* label */}
          <div className="text-md text-neutral-800 text-center lg:hidden">
            Your cart (4 items)
          </div>
          {/* Products container */}
          <div className="flex flex-col gap-4 items-center w-full justify-center">
            {shopContext?.cart.map((product, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row gap-8 p-4 items-center lg:items-start text-start w-full max-w-[308px] md:max-w-[344px] lg:max-w-none bg-white shadow-effect"
                >
                  {/* product image */}
                  <Image
                    src={product.img}
                    width={302}
                    height={249}
                    alt="Pictures of headphones"
                    onClick={() => {
                      console.log("cart:", shopContext?.cart);
                      console.log(shopContext?.totalPrice);
                    }}
                  />
                  {/* product details and qty and price */}
                  <div className="flex gap-8 flex-col lg:max-w-[302px] items-start text-start lg:h-full">
                    {/* product details and qty */}
                    <div className="flex flex-col text-start items-start gap-4">
                      {/* product name */}
                      <div className="text-purple-900 font-semibold text-md text-start">
                        {product.name}
                      </div>
                      {/* quantity and remove */}
                      <div className="flex w-full gap-8">
                        {/* quantity and buttons */}
                        <div className="flex items-center gap-2 text-sm text-neutral-800">
                          Quantity: {product.qty}
                        </div>
                        <button
                          onClick={() => {
                            shopContext.removeFromCart(product.id);
                          }}
                          className="text-red-500 underline text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <h1 className="text-lg text-neutral-800">
                      ${product.price}
                    </h1>
                  </div>
                </div>
              );
            })}
            {/* Individual product */}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Shop;
