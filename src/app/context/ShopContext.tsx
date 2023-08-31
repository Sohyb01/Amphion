import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { cartProductData, cartProductDataAndAmount } from "../types";
import { PopupsStateContext } from "./PopupsStateContext";

export type GlobalContextContent = {
  cart: CartContent;
  addToCart: (item: cartProductDataAndAmount) => void;
  removeFromCart: (itemId: string) => void;
  totalPrice: number;
} | null;

// Type of each cart item
// export type CartItem = { name: string; price: number; qty: number };

export type CartContent = cartProductDataAndAmount[];

export const ShopContext = createContext<GlobalContextContent>(null);

export const ShopContextProvider = (props: any) => {
  const popupsContext = useContext(PopupsStateContext);
  // Initialize total price
  const [totalPrice, setTotalPrice] = useState(0);
  // Initialize cart
  const [cart, setCart] = useState<CartContent>([]);

  // Recalculate total price of items in cart
  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.qty;
    });
    setTotalPrice(total);
    console.log(cart);
    popupsContext?.changePopupsState("success");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  // Whenever we add to cart
  const addToCart = (item: cartProductDataAndAmount) => {
    setCart((currentCart) => [...currentCart, item]);
  };
  // Removing from cart
  const removeFromCart = (itemId: string) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };
  const contextValue = { cart, addToCart, removeFromCart, totalPrice };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
