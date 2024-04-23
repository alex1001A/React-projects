export default function Cart() {
  return (
    <div className="cart">
      <div className="cart__title">
        <h3 className="cart__title-text">Cart</h3>
      </div>
      <div className="cart__content">
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
          <p className="cart__item_title">Paris Tour</p>
          <div className="cart__item_quantity-block">
            <button className="cart__item_plus-btn">+</button>
            <span className="cart__item_quantity">0</span>
            <button className="cart__item_minus-btn">-</button>
          </div>
          <p className="cart__item_summary">569$</p>
        </div>
        <div className="cart__summary-block">
          <p className="cart__summary-block_title">Total:</p>
          <p className="cart__summary-block_subtitle">1000$</p>
        </div>
      </div>
    </div>
  );
}
