import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { searchProducts } from "../api/search";

export default function Search() {
  const [params] = useSearchParams();
  const q = params.get("q") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchProducts(q)
      .then(setResults)
      .catch((err) => {
        console.error("Search failed:", err);
        setResults([]);
      });
  }, [q]);

  return (
    <div>
      <h2>Hittade {results.length} produkter</h2>

      <div className="grid">
        {results.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
 