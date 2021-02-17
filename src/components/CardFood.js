// Взято з https://codepen.io/alexpopovich/pen/weMgMJ
// треба розібратись

import React from "react"

const CardFood = () => {
  return (
    <div className={"card"}>
      <div className={"header"}>
        <div className={"icon"}>
          <a href="#">
            <i className={"fa fa-heart-o"}></i>
          </a>
        </div>
      </div>
      <div className={"text"}>
        <h1 className={"food"}>Chinese Noodles</h1>
        <i className={"fa fa-clock-o"}> 15 Mins</i>
        <i className={"fa fa-users"}> Serves 2</i>

        <div className={"stars"}>
          <li>
            <a href="#">
              <i className={"fa fa-star"}></i>
            </a>
            <a href="#">
              <i className={"fa fa-star"}></i>
            </a>
            <a href="#">
              <i className={"fa fa-star"}></i>
            </a>
            <a href="#">
              <i className={"fa fa-star"}></i>
            </a>
            <a href="#">
              <i className={"fa fa-star-o"}></i>
            </a>
          </li>
        </div>
        <p className={"info"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          temporibus.
        </p>
      </div>
      <a href="#" className={"btn"}>
        Let's Cook!
      </a>
    </div>
  )
}
export default CardFood
