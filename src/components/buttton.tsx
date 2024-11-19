"use client";
import { useCart } from "./providers/cart-provider";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

const Buttton = () => {
  const { items } = useCart();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <>
      <Button variant="outline" size="icon" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {hydrated && items.length > 0 && (
          <Badge variant="destructive" className="absolute -top-2 -right-2">
            {items.length}
          </Badge>
        )}
      </Button>
    </>
  );
};

export default Buttton;
