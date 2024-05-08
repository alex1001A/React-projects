import CartItem from "./CartItem";

export default function Cart({ toggleCart }) {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <div className="cart">
      <h3 className="cart__title" >Cart</h3>
      <button className="cart__remove" onClick={() => toggleCart()}>
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div className="cart__content">
        {cart.map((item) => (                         //(item, index)
          <CartItem key={item.id} item={item} />))}
        <div className="cart__summary-block">
          <p className="cart__summary-block_title">Total:</p>
          <p className="cart__summary-block_subtitle">1000$</p>
        </div>
      </div>
    </div>
  );
}
