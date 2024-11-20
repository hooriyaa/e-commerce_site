export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://dummyjson.com/products?limit=120",
      {}
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    const transformedData = data.products.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      images: item.images,
      price: item.price,
    }));
    return transformedData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {});
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
