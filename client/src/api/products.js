const API_URL = import.meta.env.VITE_API-URL;
//GET /products/:slug
export async function getProduct(slug) {
    const res = await fetch(`${API_URL}/products/${slug}`);
  if (!res.ok) throw new Error('Faild to fetch product');   
  return res.json();
    }
    // GET / products/popular
    export async function getPopularProduct(){
        const res = await fetch(`${API_URL}/products/popular`);
        if (!res.ok) throw new Error('Faild to fetch popular product'); // Znak ! znači “ne” ili “obrnuto”. (!res.ok) znaci ako odgovor nije dobar/uspjesan
        return res.json();
    
} 
/**
 * Optimized tool selectionNe, to ne znači da je `${API_URL}` isto što i ta URL adresa automatski.

To znači:

- `${API_URL}` je mjesto gdje se ubacuje vrijednost varijable `API_URL`
- ta vrijednost dolazi iz:
  `import.meta.env.VITE_API-URL`

Ako je u env-u postavljeno nešto kao:

```javascript
VITE_API_URL=https://my-backend.onrender.com
```

onda će:

```javascript
`${API_URL}/products/${slug}`
```

postati npr.

```javascript
https://my-backend.onrender.com/products/nekaj
```

O tome šta znači `export`:
- `export` znači da funkciju može koristiti drugi fajl
- odnosno “izvozi” je iz ovog fajla da bi je importovali negdje drugdje

Na primjer:

```javascript
export async function getProduct(slug) {
  ...
}
```

To znači:
- ovaj kod je dostupniji
- drugi fajl može da napiše:

```javascript
import { getProduct } from './api/products';
```

Ukratko:
- `${API_URL}` je samo placeholder za vrijednost URL-a
- `export` nije vezan za URL, nego za dostupnost funkcije u drugim fajlovima
 */