-- CreateTable
CREATE TABLE "Product" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "stock" INTEGER NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "img" TEXT NOT NULL,
    "battery_life" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
