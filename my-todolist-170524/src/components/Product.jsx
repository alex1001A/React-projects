import React from "react";

function Product({ phone, addToFav }) {
  const { img, productName, id, quantity } = phone;

  return (
    <div className="card">
      <img src={img} alt={id} />
      <h3>Model: {productName}</h3>
      <p>Quantity: {quantity}</p>
      <button onClick={addToFav}>Add to FAV</button>
    </div>
  );
}

export default Product;
