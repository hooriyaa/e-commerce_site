export const fetchProducts = async () => {
  try {
    const response = await fetch(" https://api.escuelajs.co/api/v1/products", {
      cache: "force-cache",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    const transformedData = data.map((item: any) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      images: item.images,
      price: item.price,
    }));
    return transformedData.slice(4, 48);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export async function getProduct(id: string) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "force-cache",
  });
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
