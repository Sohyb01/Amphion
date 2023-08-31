// @ts-nocheck
"use client";

import "./globals.css";
// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Popups from "./components/Popups";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ShopContextProvider } from "./context/ShopContext";
import { PopupsStateContextProvider } from "./context/PopupsStateContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

// export const metadata: Metadata = {
//   title: "Amphion",
//   description: "Portfolio Project - Sohyb Mansour",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AU69tgjr8mjpMit_pH3M59DQLZtId2UJ-i6f_Wpg7Hi6jT0oCFSb6l9-2d1f8HI3Q40N5sn5lnzdI9D0",
            currency: "EUR",
          }}
        >
          <ShopContextProvider>
            <PopupsStateContextProvider>
              <Navbar></Navbar>
              {children}
              <Popups></Popups>
            </PopupsStateContextProvider>
          </ShopContextProvider>
        </PayPalScriptProvider>
      </body>
    </html>
  );
}
