import React from "react"
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <ul>
        <li>
          {/* sidebar */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <Link to="/my_components/component_1">component 1</Link> */}
        </li>
        <li>
          {/* <Link to="/my_components/component_2">component 2</Link> */}
        </li>
        <li>
          <Link to="/">Part #1</Link>
        </li>
        <li>
          <Link to="/">Part #2</Link>
        </li>
        <li>
          <Link to="/">Part #3</Link>
        </li>
        <li>
          <Link to="/">Part #4</Link>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
