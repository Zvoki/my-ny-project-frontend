const API_URL = (import.meta.env.VITE_API_URL || "https://backend-ryn4.onrender.com").replace(/\/$/, "");

export async function getProduct(slug) {
  const res = await fetch(`${API_URL}/products/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}

export async function getPopularProducts() {
  const res = await fetch(`${API_URL}/products/popular`);
  if (!res.ok) throw new Error("Failed to fetch popular products");
  return res.json();
}

export async function getPopularProduct() {
  return getPopularProducts();
}