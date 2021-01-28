import React from "react"

const Item = ({ compitem }) => {
  return (
    <div className={"comp-cardr"}>
      <span>{compitem.title + "   "}</span>
      <span>{compitem.parameters + "   "}</span>
      <span>{compitem.price}</span>
    </div>
  )
}
export default Item
