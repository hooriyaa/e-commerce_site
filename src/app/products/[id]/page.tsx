import { Suspense } from "react";
import { getProduct } from "@/lib/api";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { AddToCartButton } from "@/components/add-to-cart";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <span className="text-gray-500 mx-2">/</span>
        <span className="text-gray-500">{product.title}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        <Suspense fallback={<div>Loading gallery...</div>}>
          <ProductImageGallery images={product.images} title={product.title} />
        </Suspense>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <Badge variant="secondary">{product.category.name}</Badge>
              </div>
              <p className="text-gray-600">{product.description}</p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <AddToCartButton product={product} />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Category</dt>
                  <dd className="font-medium">{product.category.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Product ID</dt>
                  <dd className="font-medium">{product.id}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
