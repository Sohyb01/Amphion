export interface cartProductData {
  name: string;
  id: string;
  price: number;
  discount: number;
  battery_life: number;
  img: string;
}

export interface cartProductDataAndAmount {
  name: string;
  id: string;
  price: number;
  discount: number;
  battery_life: number;
  img: string;
  qty: number;
}
