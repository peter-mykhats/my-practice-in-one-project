import React from "react"
import { Link } from "gatsby"
// import Counter from "./Counter";
import "../scss/main.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer-top container">
      <div className="logo">
        <Link to="/">
          <span className="logo__text logo__top">My BIG</span>
          <span className="logo__text logo__bottom">Testing</span>
        </Link>
      </div>

      <div className="bottom-block">
        <div className="language">
          <div className="language-item">
            <Link className="language-item__language-link" to="/">
              eng
            </Link>
          </div>
          <div className="language-item">
            <Link className="language-item__language-link" to="/">
              укр
            </Link>
          </div>
          <div className="language-item">
            <Link className="language-item__language-link" to="/">
              рус
            </Link>
          </div>
        </div>
        <div className="shoping-cart">
          <Link className="shoping-cart__link" to="/">
            <div className="shoping-cart__img">
              <img src="/img/moon.png" alt="dark theme" />
            </div>
          </Link>
          <Link className="shoping-cart__link" to="/">
            <div className="shoping-cart__counter">{/* <Counter /> */}</div>
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
