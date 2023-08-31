"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PopupsStateContext } from "../context/PopupsStateContext";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Product(data: any) {
  const [qty, setQty] = useState(1);

  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [showErrorMessage, setShowErrorMessage] = useState(false);

  const shopContext = useContext(ShopContext);
  const popupsContext = useContext(PopupsStateContext);
  // console.log(shopContext);

  const addProductToContextCart = () => {
    shopContext?.addToCart({
      name: data.data.name,
      id: data.data.id,
      price: data.data.price,
      discount: data.data.discount,
      battery_life: data.data.battery_life,
      img: data.data.img,
      qty,
    });
    popupsContext?.changePopupsState("success");
  };

  return (
    <div
      className={`w-[302px] flex flex-col items-center text-start shadow-effect ${
        shopContext?.priceFilterTest(data.data) ? "" : "hidden"
      }`}
    >
      {/* Image */}
      {/* <div className="w-full aspect-[302/249] bg-slate-300"></div> */}
      <Image
        src={data.data.img}
        width={302}
        height={249}
        alt="Pictures of headphones"
      />
      {/* Description */}
      <div className="w-full flex flex-col items-center text-start gap-6 p-4">
        {/* name and model */}
        <div className="flex flex-col text-start gap-2 items-start w-full">
          <h1 className="text-purple-900 font-semibold text-sm">
            {data.data.name}
          </h1>
          <p className="text-neutral-500 text-sm">
            Battery life: {data.data.battery_life}H
          </p>
        </div>
        {/* price */}
        <div className="text-md text-neutral-800 text-start w-full">
          {" "}
          €{data.data.price}
        </div>
        {/* Buttons part */}
        <div className="w-full flex items-center gap-4">
          <button
            onClick={() => addProductToContextCart()}
            className="bg-purple-600 text-white text-center text-sm px-4 py-2 w-full"
          >
            Add to cart
          </button>
          {/* Add and subtract buttons */}
          <div className="flex gap-2 items-center text-neutral-800">
            <button
              onClick={() => {
                qty > 1 ? setQty(qty - 1) : null;
              }}
              className="border-purple-600 border-[2px] border-solid aspect-square w-[39px] h-[39px] grid place-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="3"
                viewBox="0 0 15 3"
                fill="none"
              >
                <path
                  d="M1 1.5H14"
                  stroke="#9333EA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {qty}
            <button
              onClick={() => {
                qty < 99 ? setQty(qty + 1) : null;
              }}
              className="border-purple-600 border-[2px] border-solid aspect-square w-[39px] h-[39px] grid place-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M1 7.5H14"
                  stroke="#9333EA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 14V1"
                  stroke="#9333EA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
