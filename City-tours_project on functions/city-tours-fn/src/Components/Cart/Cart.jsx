import CartItem from "./CartItem";

export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return (
    <div className="cart">
      <div className="cart__title">
        <h3 className="cart__title-text">Cart</h3>
      </div>
      <div className="cart__content">
        {cart.map((item) => (                         //(item, index)
          <CartItem item={item} index={index}/>))}
        <div className="cart__summary-block">
          <p className="cart__summary-block_title">Total:</p>
          <p className="cart__summary-block_subtitle">1000$</p>
        </div>
      </div>
    </div>
  );
}
