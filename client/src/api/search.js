const API_URL = import.meta.env.VITE_API_URL;


// GET /search?q=...
export async function searchProducts(query) {
  const res = await fetch(`${API_URL}/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Search failed");
  return res.json();
}
