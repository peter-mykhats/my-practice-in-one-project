import React from "react"

const Item = ({ bookitem }) => {
  return (
    <div>
      <span>{bookitem.title + "   "}</span>
      <span>{bookitem.parameters + "   "}</span>
      <span>{bookitem.price}</span>
    </div>
  )
}
export default Item
