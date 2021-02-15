import React from "react"
import { Link } from "gatsby"
// import Counter from "./Counter";
import "../scss/main.scss"
import Search from "./Search"

const Header = () => (
  <header className={"header"}>
    <div className="header-top container">
      <div className="contacts">
        <div className="contact">
          {/* <img src="/imgs/small_phone_icon.png" alt="small_phone_icon" /> */}
          <span className="contact__text">тел:777-77-77</span>
        </div>
        <div className="contact">
          {/* <img src="/imgs/email_icon.png" alt="email_icon" /> */}
          <span className="contact__text">email:my-test@gmail.com</span>
        </div>
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
          {/* <Link className="shoping-cart__link" to="/"> */}
          <div className="shoping-cart__img">
            <Search />
            {/* <img src="/img/moon.png" alt="dark theme" /> */}
          </div>
          {/* </Link> */}
          <Link className="shoping-cart__link" to="/">
            <div className="shoping-cart__counter">{/* <Counter /> */}</div>
          </Link>
        </div>
      </div>
    </div>

    <div className="header-bottom">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo__text logo__top">My BIG</span>
            <span className="logo__text logo__bottom">Testing</span>
          </Link>
        </div>
        <div className="hamburger-box">
          <div className="menu">
            <input className="menu__btn" type="checkbox" id="menu__btn" />
            <label className="menu__icon" htmlFor="menu__btn">
              <span className="menu__navicon"></span>
            </label>

            <ul className="hamburger-list">
              <li className="hamburger-list__item">
                <Link className="hamburger-list__link" to="/">
                  головна
                </Link>
              </li>
              <li className="hamburger-list__item">
                <Link className="hamburger-list__link" to="/my_components">
                  my test components
                </Link>
              </li>
              <li className="hamburger-list__item">
                <Link className="hamburger-list__link" to="/my_office">
                  my office
                </Link>
              </li>
              <li className="hamburger-list__item">
                <Link className="hamburger-list__link" to="/shop">
                  shop
                </Link>
              </li>
              <li className="hamburger-list__item">
                <Link className="hamburger-list__link" to="/i_am">
                  i am
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
