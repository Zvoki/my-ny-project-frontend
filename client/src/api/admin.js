const API_URL = (import.meta.env.VITE_API_URL || "https://my-ny-project-backend.onrender.com").replace(/\/$/, "");

// GET /admin/products
export async function getAdminProducts() {
  const res = await fetch(`${API_URL}/admin/products`);
  if (!res.ok) throw new Error("Failed to fetch admin products");
  return res.json();
}

//  POST /admin/products/new
export async function createProduct(data) {
  const res = await fetch(`${API_URL}/admin/products/new`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
}
