"use client";

import { Product } from "../app/types/types";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  item: Product & { quantity: number };
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex justify-between items-center w-full sm:w-96 bg-white border rounded-lg mb-4 p-4">
      {/* Image */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <Image
          src={item.images[0]}
          alt={item.title}
          width={400}
          height={400}
          className="w-full h-full object-contain object-center rounded-md"
        />
      </div>

      {/* Item Title and Price */}
      <div className="flex-1 ml-3">
        <h3 className="font-medium text-sm sm:text-base line-clamp-2">{item.title}</h3>
        <p className="text-sm text-gray-500">${item.price * item.quantity}</p>
      </div>

      {/* Quantity Controls and Remove */}
      <div className="flex items-center gap-2 sm:gap-4 ml-3">
        <Button
          size="icon"
          variant="outline"
          onClick={() => onUpdateQuantity(item.id, -1)}
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button
          size="icon"
          variant="outline"
          onClick={() => onUpdateQuantity(item.id, 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>

        <Button
          size="icon"
          variant="destructive"
          onClick={() => onRemove(item.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
