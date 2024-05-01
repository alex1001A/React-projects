export default function CartItem({item}) {
  return (
    <div className="cart__item">
      <div className="cart__item_buttons">
        <button>
          <i className="fa-solid fa-heart"></i>
        </button>
        <button>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <img className="cart__item_image" src="#" />
      <p className="cart__item_title">{item.name}</p>
      <div className="cart__item_quantity-block">
        <button className="cart__item_plus-btn">+</button>
        <span className="cart__item_quantity">0</span>
        <button className="cart__item_minus-btn">-</button>
      </div>
      <p className="cart__item_summary">{item.price}</p>
    </div>
  );
}
