import React from "react"
import { Link } from "gatsby"

const Item = ({ compitem }) => {
  const path = compitem.path
  return (
    <Link to={`/bookstore/${path}`} className="books-card">
      <div className={"comp-card"}>
        <div className={"comp-card__img"}>
          {<img src={compitem.image} alt="image" />}
        </div>
        <div className={"comp-card__title"}>{compitem.title}</div>
        <div className={"comp-card-bottom"}>
          <div className={"comp-card__price"}>{compitem.price}</div>
          <div className={"comp-card__shopcart"}>{compitem.price}</div>
        </div>
      </div>
    </Link>
  )
}
export default Item
