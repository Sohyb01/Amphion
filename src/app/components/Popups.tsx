"use client";

import Link from "next/link";
import { PopupsState, PopupsStateContext } from "../context/PopupsStateContext";
import React, { useContext } from "react";

function Popups() {
  const popupsState = useContext(PopupsStateContext);

  return (
    // Popups container
    <div className="fixed flex items-center justify-center bottom-8 w-full z-[100]">
      {/* Success message! */}
      {popupsState?.popupsState === "success" && (
        <div
          onClick={() => popupsState.changePopupsState(null)}
          className="bg-white rounded-[32px] flex flex-col items-center gap-4 p-4 px-8 shadow-effect"
        >
          <h1 className="text-green-600">Item added successfully!</h1>
          <Link href="/cart" className="text-neutral-800 underline">
            Go to cart
          </Link>
        </div>
      )}
      {/* Failure message */}
      {popupsState?.popupsState === "failure" && (
        <div
          onClick={() => popupsState.changePopupsState(null)}
          className="bg-red-500 rounded-[32px] flex flex-col items-center gap-4 p-4 shadow-effect"
        >
          <h1 className="text-white">Operation unsuccessful</h1>
        </div>
      )}
      {/* Error message */}
      {popupsState?.popupsState === "error" && (
        <div
          onClick={() => popupsState.changePopupsState(null)}
          className="bg-yellow-500 rounded-[32px] flex flex-col items-center gap-4 p-4 shadow-effect"
        >
          <h1 className="text-neutral-800">An error has occurred</h1>
        </div>
      )}
    </div>
  );
}

export default Popups;
