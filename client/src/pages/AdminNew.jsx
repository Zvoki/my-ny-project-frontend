//forma za dodavanje proizvoda 
//nakon submit → redirect na listu 
//pages/AdminNew.jsx:
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../api/admin";

export default function AdminNew() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    namn: "",
    description: "",
    image_url: "",
    brand: "",
    sku: "",
    price: "",
    slug: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createProduct(form);        // koristi API servis
      nav("/admin/products");           // redirect nakon uspješnog unosa
    } catch (err) {
      console.error("Fel vid skapande av produkt:", err);
      alert("Något gick fel!");
    }
  }

  return (
    <section>
      <h1>Ny produkt</h1>

      <form onSubmit={handleSubmit} className="form-column">
        
        <label htmlFor="namn">Namn</label>
        <input
          id="namn"
          name="namn"
          value={form.namn}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Beskrivning</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows="4"
        />

        <label htmlFor="image_url">Bild URL</label>
        <input
          id="image_url"
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
        />

        <label htmlFor="brand">Märke (Brand)</label>
        <input
          id="brand"
          name="brand"
          value={form.brand}
          onChange={handleChange}
        />

        <label htmlFor="sku">SKU</label>
        <input
          id="sku"
          name="sku"
          value={form.sku}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Pris</label>
        <input
          id="price"
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="slug">Slug</label>
        <input
          id="slug"
          name="slug"
          value={form.slug}
          onChange={handleChange}
          required
        />

        <button type="submit">Lägg till</button>
      </form>
    </section>
  );
}
