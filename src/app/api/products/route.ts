import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

// GET all products
export async function GET(request: NextRequest, response: NextResponse) {
  const allProducts = await prisma.product.findMany({});
  return NextResponse.json({ allProducts });
}

// CREATE A NEW trip!
export async function POST(request: NextRequest) {
  const body = await request.json();
  const newProduct = await prisma.product.create({ data: body });
  return NextResponse.json({ newProduct });
}

// DELETE A trip
export async function DELETE(request: NextRequest) {
  const productId = await request.json();
  const deletedProduct = await prisma.product.delete({
    where: {
      id: productId,
    },
  });
  return NextResponse.json({ deletedProduct });
}
