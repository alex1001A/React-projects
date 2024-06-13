import React, { useEffect, useState } from "react";

import phoneData from "../data/MOBILE_PHONES.json";

import Product from "../components/Product";

function Products() {
  const [data, setData] = useState(phoneData);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCount((prevCount) => (prevCount = cart.length));
  }, [cart]);

  function setToLocalStorage(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function sortArrByQty() {
    setData((prevData) => prevData.filter((phone) => phone.quantity >= 50));
  }

  return (
    <div>
      <header>
        <h1>{count}</h1>
        <button onClick={sortArrByQty}>Sort by QTY more than 50</button>
      </header>
      <div className="products">
        {data.map((phone, index) => {
          return (
            <Product
              addToFav={() => setToLocalStorage(phone)}
              key={index}
              phone={phone}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
