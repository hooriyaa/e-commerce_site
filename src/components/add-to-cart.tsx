"use client";

import { Button } from "@/components/ui/button";
import { Product } from "@/app/types/types";
import { useCart } from "./providers/cart-provider";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Item Successfully Placed in Your Cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Button
      size="lg"
      className="w-full group bg-gray-800 hover:bg-transparent text-white rounded-xl hover:text-black text-sm"
      onClick={handleAddToCart}
    >
      Add to Cart
      <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-orange-500 duration-300" />
    </Button>
  );
}
