import CartItem from "./CartItem";

import { useEffect, useState } from "react";

export default function Cart({ toggleCart }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    updateTotalPrice(storedCart);
  }, []);

  useEffect(() => {
    updateTotalPrice(cart);
  }, [cart]);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
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
          <p className="cart__summary-block_title">
            Total price: <span className="cart__summary-block_subtitle">{totalPrice}$</span> 
            </p>
        </div>
      </div>
    </div>
  );
}
