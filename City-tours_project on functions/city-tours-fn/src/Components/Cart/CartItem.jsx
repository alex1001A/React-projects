export default function CartItem({ item }) {   //(item, index)
  return (
    <div className="cart__item">
      <button className="cart__item_button-remove">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <img className="cart__item_image" src={item.img} />
      <p className="cart__item_title">{item.name}</p>
      <div className="cart__item_quantity-block">
        <button className="cart__item_plus-btn">+</button>
        <span className="cart__item_quantity">0</span>
        <button className="cart__item_minus-btn">-</button>
      </div>
      <p className="cart__item_summary">{item.price}$</p>
    </div>
  );
}
