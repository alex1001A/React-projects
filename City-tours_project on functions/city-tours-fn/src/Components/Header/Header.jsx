// React hooks
import { useState } from "react";

// Components
import logo from "../../img/logo.jpg";
import Nav from "../Nav/Nav";

//Styles
import "../../style/components/header.scss";

export default function Header() {
  let [cartCount, setCartCount] = useState(0);
  let [cart, setCart] = useState([])

  return (
    <header className="header">
      <div className="container header__container">
        <img className="header__logo" src={logo} alt="logo" />
        <Nav />
        <div className="cart">
          <i className="fa-solid fa-cart-shopping cart__icon">
            <span className="cart__count">{cartCount}</span>
          </i>
        </div>
      </div>
    </header>
  );
}
