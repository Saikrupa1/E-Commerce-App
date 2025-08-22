// client/src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  function addToCart(price) {
    setCartTotal((total) => total + price);
  }

  return (
    <div>
      <h1>eCommerce Store</h1>
      <ul>
        {products.map(({ id, name, price }) => (
          <li key={id}>
            {name} - ${price}{" "}
            <button onClick={() => addToCart(price)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Total: ${cartTotal}</h2>
    </div>
  );
}

export default App;
