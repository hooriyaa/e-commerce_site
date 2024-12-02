"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { fetchProducts } from "@/lib/api";
import Image from "next/image";
import Loading from "./loading";
import { TbListDetails } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";

type Product = {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
};

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };

    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center my-8">
            <h1 className="text-black text-2xl font-bold tracking-tight lg:text-4xl">
              All Products
            </h1>
            <div className="w-28 h-1 mt-2 mb-8 rounded-full bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group relative border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow pb-16"
              >
                <div className="relative aspect-square overflow-hidden mx-auto p-4 shadow-md rounded-xl group">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
                  />
                </div>

                <div className="p-4">
                  <h1 className="text-gray-800 border-b pb-2 text-lg font-semibold  tracking-tight transition-colors  line-clamp-2 ">
                    {product.title}
                  </h1>
                  {/* price */}
                  <p className="text-black pb-2 mt-2 text-base font-semibold tracking-tight line-clamp-1">
                    ${product.price.toFixed(2)}
                  </p>

                  <div className="flex gap-3 absolute bottom-4 left-4 right-4">
                    <button className="group flex-1 text-center justify-center items-center bg-gray-800 flex rounded-xl hover:bg-transparent text-white hover:text-black text-sm p-3 scroll-m-20 font-semibold tracking-tight transition-colors duration-300">
                      <FaHeart className="mr-2 h-4 w-4 group-hover:text-orange-500 duration-300" />
                      Buy Now
                    </button>
                    <Link href={`/products/${product.id}`} className="flex-1">
                      <button className="group w-full text-center justify-center items-center bg-gray-800 flex rounded-xl hover:bg-transparent text-white hover:text-black text-sm p-3 scroll-m-20 font-semibold tracking-tight transition-colors duration-300">
                        <TbListDetails className="mr-2 h-4 w-4 group-hover:text-orange-500 duration-300" />
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;
