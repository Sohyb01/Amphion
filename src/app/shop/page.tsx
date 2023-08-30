import React, { useState } from "react";
import prisma from "../lib/prisma";
import Product from "../components/Product";
import Link from "next/link";
import { cartProductData } from "../types";

async function Shop() {
  // FETCH PRODUCTS FROM PRISMA
  const allProducts = await prisma.product.findMany();

  // FETCH PRODUCTS FROM SHOPIFY ADMIN API
  // const shopifyData = await fetch(
  //   "https://b7dc30-4.myshopify.com/admin/api/2023-07/products.json",
  //   {
  //     headers: {
  //       "X-Shopify-Access-Token": "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",
  //     },
  //     cache: "no-cache",
  //   }
  // );
  // const uncleanedData = await shopifyData.json();

  // const cleanedProductData = uncleanedData.products.map((product: any) => {
  //   return {
  //     name: product.title,
  //     price: product.variants[0].price,
  //     img: product.images[0].src,
  //   };
  // });
  // console.log(cleanedProductData);

  // How to get the names
  // console.log(data.products[0].title);
  // How to get the price
  // console.log(data.products[0].variants[0].price);

  // const [cartContent, setCartContent] = useState([]);

  return (
    <main className="container-all min-h-[100vh] bg-white pt-[120px] lg:pt-[180px] pb-[100px]">
      <div className="section__styles pt-[120px] flex flex-col lg:flex-row pb-[100px] gap-8">
        {/* Filters part */}
        <div className="flex flex-col items-start text-start gap-8 text-neutral-800 w-full max-w-[240px]">
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
                <div className="flex items-center gap-2">20</div>
                <div className="flex items-center gap-2">30</div>
                <div className="flex items-center gap-2">40</div>
                <div className="flex items-center gap-2">50</div>
              </div>
            </div>
            {/* Divider */}
            <div className="w-full h-[1px] bg-neutral-200"></div>
            {/* Option */}
            <div className="collapse collapse-arrow bg-white text-neutral-800">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-md">Price</div>
              <div className="collapse-content flex flex-col gap-2 font-semibold">
                <p>$129 - $200</p>
                <p>$200 - $300</p>
                <p>$300 - $400</p>
                <p>$400 - $500</p>
              </div>
            </div>
            {/* Divider */}
            <div className="w-full h-[1px] bg-neutral-200"></div>
            {/* Divider */}
            {/* <div className="w-full h-[1px] bg-neutral-200"></div>
            <div className="flex gap-2 items-center">
              Battery life{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M4.99989 6C4.81712 6 4.63426 5.92676 4.49498 5.78027L0.209263 1.28027C-0.0697545 0.987305 -0.0697545 0.512695 0.209263 0.219727C0.488281 -0.0732422 0.94029 -0.0732422 1.21931 0.219727L4.99989 4.19062L8.78114 0.220312C9.06015 -0.0726564 9.51216 -0.0726564 9.79118 0.220312C10.0702 0.513281 10.0702 0.98789 9.79118 1.28086L5.50547 5.78086C5.36596 5.92734 5.18292 6 4.99989 6Z"
                  fill="#525252"
                />
              </svg>
            </div>
            <div className="w-full h-[1px] bg-neutral-200"></div>
            <div className="flex gap-2 items-center">
              Price{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  d="M4.99989 6C4.81712 6 4.63426 5.92676 4.49498 5.78027L0.209263 1.28027C-0.0697545 0.987305 -0.0697545 0.512695 0.209263 0.219727C0.488281 -0.0732422 0.94029 -0.0732422 1.21931 0.219727L4.99989 4.19062L8.78114 0.220312C9.06015 -0.0726564 9.51216 -0.0726564 9.79118 0.220312C10.0702 0.513281 10.0702 0.98789 9.79118 1.28086L5.50547 5.78086C5.36596 5.92734 5.18292 6 4.99989 6Z"
                  fill="#525252"
                />
              </svg>
            </div>
            <div className="w-full h-[1px] bg-neutral-200"></div> */}
          </div>
        </div>
        {/* Products & sort by */}
        <div className="flex flex-col items-center text-start gap-4 lg:w-fit">
          {/* Sort By*/}
          <div className="flex items-center gap-2">
            <div className="text-neutral-800 text-md">Sort by: </div>
            <div className="border-neutral-200 border-[1px] grid place-items-center text-center px-2 text-neutral-600">
              Name (Descending)
            </div>
          </div>
          {/* Number label */}

          <p className="text-md text-neutral-600 text-start w-full">
            {allProducts.length} Products
          </p>
          {/* Products container */}
          <div className="flex flex-col items-center w-full gap-8 md:flex-row md:flex-wrap md:justify-center">
            {allProducts.map((product: cartProductData, index: number) => {
              // return <h1 key={index}>test</h1>;
              return (
                <div key={index}>
                  <Product data={product}></Product>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section__styles grid place-items-center pt-4">
        {/* Checkout cart button */}
        <Link
          href="/cart"
          className="px-8 py-4 text-center w-full grid place-items-center border-[2px] border-solid border-purple-600 bg-white text-purple-600 rounded-[20px] text-lg font-semibold max-w-[480px]"
        >
          Cart & Checkout
        </Link>
      </div>
    </main>
  );
}

export default Shop;
