import { useState, useEffect } from "react";


export default function CartItem({ item, removeFromCart, updateTotalPrice }) {

  const { id, name, price, img } = item;
  
  const [qty, setQty] = useState(1)

  // useEffect(() => {
  //   const savedQty = localStorage.getItem(`cart-${id}`);
  //   if (savedQty) {
  //     setQty(parseInt(savedQty));
  //   }
  // }, [id]);

  const plusQty = () => {
    setQty((prevQty) => {
      const newQty = prevQty + 1;
      localStorage.setItem(`cart-${id}`, newQty);
      return newQty;
    });
  };

  const minusQty = () => {
    if (qty === 0) {
      return;
    }
    setQty((prevQty) => {
      const newQty = prevQty - 1;
      localStorage.setItem(`cart-${id}`, newQty);
      return newQty;
    });
  };
  
  const handleRemoveClick = () => {
    removeFromCart(id);
  };

  return (
    <div className="cart__item">
      <button onClick={handleRemoveClick} className="cart__item_button-remove">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <img className="cart__item_image" src={img} />
      <p className="cart__item_title">{name}</p>
      <div className="cart__item_quantity-block">
        <button onClick={() => plusQty()} className="cart__item_plus-btn">+</button>
        <span className="cart__item_quantity">{qty}</span>
        <button onClick={() => minusQty()} className="cart__item_minus-btn">-</button>
      </div>
      <p className="cart__item_summary">{price * qty}$</p>
    </div>
  );
}
