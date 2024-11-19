export interface Product {
    id: number
    title: string
    price: number
    description: string
    quantity: number;
    category: {
      id: number
      name: string
      image: string
    }
    thumbnail:string
    images:string[]
  }
  
  
  export interface CartItem extends Product {
    quantity: number;
  
  }
  
  export interface CartContextType {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    total: number;
  }