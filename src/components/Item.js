import React from "react"
import { Link } from "gatsby"
// import Star from "./Star"
import { useDispatch, useSelector } from "react-redux"
import { Bay, MoneySpent } from "../redux/actions/accessoriesAction"
import Star from "./Star"

const Item = ({ productItem }) => {
  const price = productItem.frontmatter.price
  const nosale = (price / 100) * 120
  const sale = price - nosale

  const dispatch = useDispatch()
  const money = useSelector(state => state.acc.money)

  const bayHandler = () => {
    if (price > money) {
      alert("У вас недостатньо грошей")
    } else {
      dispatch(Bay(productItem))
      dispatch(MoneySpent(productItem))
      alert("Куплено!")
    }
  }

  return (
    <Link to={`/shop/${productItem.frontmatter.path}`}>
      <div className={"comp-card"}>
        <div className={"comp-card__img"}>
          {<img src={productItem.frontmatter.image} alt="imagee" />}
        </div>
        <div className={"comp-card__title"}>
          {productItem.frontmatter.title}
        </div>
        <div className={"comp-card__star"}>
          <Star value={productItem.frontmatter.parameters / 2} />

          <h4>{productItem.frontmatter.parameters / 2}</h4>
        </div>
        <div className={"comp-card-sale"}>
          <div className={"comp-card__price-nosale"}>{nosale + " $"}</div>
          <div className={"comp-card__price-sale"}>{sale + " $"}</div>
        </div>
        <div className={"comp-card-bottom"}>
          <div className={"comp-card__price"}>
            {productItem.frontmatter.price + " $"}
          </div>
          <p>{money}</p>
          {/* <div>{productItem.frontmatter.parameters}</div> */}

          <Link to="/shop">
            <div
              className={"comp-card__shopcart"}
              onClick={() => bayHandler(productItem)}
            >
              {/* <img src="img/pngegg.png" alt="shopcart" /> */}
              купити
            </div>
          </Link>
        </div>
      </div>
    </Link>
  )
}
export default Item
