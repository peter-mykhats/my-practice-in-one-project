import React from "react"
import { Link } from "gatsby"

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* sidebar */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">component 1</Link>
        </li>
        <li>
          <Link to="/">component 2</Link>
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
