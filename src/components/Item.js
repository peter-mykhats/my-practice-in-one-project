import React from "react"
import { Link } from "gatsby"

const Item = ({ productItem }) => {
  const price = productItem.frontmatter.price
  const nosale = (price / 100) * 120
  const sale = price - nosale
  return (
    <Link to={`/shop/${productItem.id}`} className="books-card">
      <div className={"comp-card"}>
        <div className={"comp-card__img"}>
          {<img src={productItem.frontmatter.image} alt="imagee" />}
        </div>
        <div className={"comp-card__title"}>
          {productItem.frontmatter.title}
        </div>
        <div className={"comp-card-sale"}>
          <div className={"comp-card__price-nosale"}>{nosale + " $"}</div>
          <div className={"comp-card__price-sale"}>{sale + " $"}</div>
        </div>
        <div className={"comp-card-bottom"}>
          <div className={"comp-card__price"}>
            {productItem.frontmatter.price + " $"}
          </div>
          <div className={"comp-card__shopcart"}>
            {/* <img src="img/pngegg.png" alt="shopcart" /> */}
            {productItem.frontmatter.price}
          </div>
        </div>
      </div>
    </Link>
  )
}
export default Item
