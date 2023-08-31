import React, { useState } from "react";
import prisma from "../lib/prisma";
import Product from "../components/Product";
import Link from "next/link";
import { cartProductData } from "../types";
import Filters from "../components/Filters";

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
      <div className="section__styles pt-[120px] flex flex-col items-center lg:flex-row lg:items-start pb-[100px] gap-8">
        <Filters></Filters>
        {/* Products & sort by */}
        <div className="flex flex-col items-center text-start gap-4 lg:w-fit">
          {/* Sort By*/}
          {/* <div className="flex items-center gap-2">
            <div className="text-neutral-800 text-md">Sort by: </div>
            <div className="border-neutral-200 border-[1px] grid place-items-center text-center px-2 text-neutral-600">
              Name (Descending)
            </div>
          </div> */}
          {/* Number label */}

          <p className="text-md text-neutral-600 text-start w-full">
            {allProducts.length} Products
          </p>
          {/* Products container */}
          <div className="flex flex-col items-center w-full gap-8 md:flex-row md:flex-wrap md:justify-center">
            {allProducts.map((product: cartProductData, index: number) => {
              // return <h1 key={index}>test</h1>;
              return <Product key={index} data={product}></Product>;
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
