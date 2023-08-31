"use client";
import { useContext } from "react";
import React from "react";
import { ShopContext } from "../context/ShopContext";

function Filters() {
  const shopContext = useContext(ShopContext);
  return (
    <div className="flex flex-col items-start text-start gap-8 text-neutral-800 w-full max-w-[340px]">
      {/* Filter title */}
      <h1 className="text-neutral-800 text-lg">Filter</h1>
      {/* Filter options */}
      <div className="flex flex-col text-start items-start text-md gap-4 w-full">
        {/* Collapse */}
        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-200"></div>
        {/* Option */}
        <div className="collapse collapse-arrow bg-white text-neutral-800">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md">Battery life (hours)</div>
          <div className="collapse-content flex flex-col gap-2 font-semibold">
            <div className="flex items-center gap-2">
              <p className="w-[10ch]">Any</p>
              <input
                type="radio"
                name="radio-2"
                className="radio border-solid border-neutral-400 border-[2px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="w-[10ch]">&gt;20 Hours</p>
              <input
                type="radio"
                name="radio-2"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="w-[10ch]">&gt;30 Hours</p>
              <input
                type="radio"
                name="radio-2"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="w-[10ch]">&gt;40 Hours</p>
              <input
                type="radio"
                name="radio-2"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="w-[10ch]">&gt;50 Hours</p>
              <input
                type="radio"
                name="radio-2"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-200"></div>
        {/* Option */}
        <div className="collapse collapse-arrow bg-white text-neutral-800">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-md">Price</div>
          <div className="collapse-content w-full flex flex-col gap-2 font-semibold">
            <div className="flex w-fit items-center gap-2">
              <p className="w-[12ch]">Any</p>
              <input
                onClick={() => shopContext?.setPriceFilters(null)}
                type="radio"
                name="radio-1"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
            <div className="flex w-fit items-center gap-2">
              <p className="w-[12ch]">€129 - €199</p>
              <input
                onClick={() => shopContext?.setPriceFilters([129, 199])}
                type="radio"
                name="radio-1"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="w-[12ch]">€200 - €299</p>
              <input
                onClick={() => shopContext?.setPriceFilters([200, 299])}
                type="radio"
                name="radio-1"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="w-[12ch]">€300 - €399</p>
              <input
                onClick={() => shopContext?.setPriceFilters([300, 399])}
                type="radio"
                name="radio-1"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <p className="w-[12ch]">€400 - €499</p>
              <input
                onClick={() => shopContext?.setPriceFilters([400, 499])}
                type="radio"
                name="radio-1"
                className="radio  border-solid border-neutral-400 border-[2px]"
              />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-200"></div>
      </div>
    </div>
  );
}

export default Filters;
