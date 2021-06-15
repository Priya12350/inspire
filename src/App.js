import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://type.fit/api/quotes"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <p>{product.text}</p>
      ))}
    </div>
  );
}

export default App;
