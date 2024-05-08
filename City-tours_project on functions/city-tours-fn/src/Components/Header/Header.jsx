// React hooks
import { useState } from "react";
import { Link } from 'react-router-dom'

// Components
import logo from "../../img/logo.jpg";
import Nav from "../Nav/Nav";
import Cart from "../Cart/Cart";

//Styles
import "../../style/components/header.scss";

export default function Header() {
  let [cartCount, setCartCount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  function toggleCart() {
    setShowCart(prevState => !prevState);
  }

  return (
    <header className="header">
      <div className="container header__container">
        <Link className="nav-list__link" to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <Nav />
        <div className="cart-icon" onClick={toggleCart}>
          <i className="fa-solid fa-cart-shopping cart-icon__icon">
            <span className="cart-icon__count">{cartCount}</span>
          </i>
        </div>
        {showCart && <Cart toggleCart={toggleCart}/>} {/* Условный рендеринг корзины */}
      </div>
    </header>
  );
}
