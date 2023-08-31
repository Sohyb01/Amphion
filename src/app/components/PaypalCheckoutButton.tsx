// @ts-nocheck

"use client";

import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { PopupsStateContext } from "../context/PopupsStateContext";

const PaypalCheckoutButton = (props: any) => {
  const popupsContext = useContext(PopupsStateContext);
  const shopContext = useContext(ShopContext);

  const [error, setError] = useState(null);

  if (error) {
    // Display error message, modal or redirect user to error page
    // popupsContext?.changePopupsState("error");
  }

  const [paidFor, setPaidFor] = useState(false);

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if response is error
    setError(
      "Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us for assistance."
    );
  };

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    alert("Thank you for your purchase!");
  }

  return (
    <PayPalButtons
      style={{
        color: "gold",
        layout: "horizontal",
        shape: "rect",
        label: false,
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Amphion checkout",
              amount: {
                value: shopContext?.totalPrice,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture().then(() => {
          alert("Transaction completed!");
        });
        return order;

        handleApprove(data.orderID);
      }}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
      onCancel={() => {
        alert("Cancelled");
      }}
    />
  );
};

export default PaypalCheckoutButton;
