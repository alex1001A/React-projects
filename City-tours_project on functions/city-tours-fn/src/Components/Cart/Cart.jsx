import CartItem from "./CartItem";

import { useState } from "react";

export default function Cart({ toggleCart }) {

  const [totalPrice, setTotalPrice] = useState(0);
  
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateTotalPrice = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };


  return (
    <div className="cart">
      <h3 className="cart__title" >Cart</h3>
      <button className="cart__remove" onClick={() => toggleCart()}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="cart__content">
        {cart.map((item) => (                         
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>))}
        <div className="cart__summary-block">
          <p className="cart__summary-block_title">Total:</p>
          <p className="cart__summary-block_subtitle">{totalPrice}$</p>
        </div>
      </div>
    </div>
  );
}
