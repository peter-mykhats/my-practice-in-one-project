import React from "react"

const Item = ({ compitem }) => {
  return (
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
  )
}
export default Item
