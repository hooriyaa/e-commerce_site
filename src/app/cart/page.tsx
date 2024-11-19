"use client";

import { CartItem } from "@/components/cart-item";
import { useCart } from "@/components/providers/cart-provider";
import Cartcard from "@/components/cartcard";
import OrderSummary from "@/components/orderSummary";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  return (
    <div className="pt-7 sm:pt-0 sm:mx-14 mx-5 mb-12">
      {items.length === 0 ? (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 min-h-screen bg-white md:pt-8">
          {/* items */}
          <div className="col-span-2 bg-white">
            <Cartcard />
          </div>
          {/* order summary */}
          <OrderSummary />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 min-h-screen bg-white md:pt-8">
          <div className="col-span-2 bg-white">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
          {/* order summary */}
          <OrderSummary />
        </div>
      )}
    </div>
  );
}
