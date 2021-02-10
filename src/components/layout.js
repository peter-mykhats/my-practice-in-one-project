import React from "react"

import Header from "./header"
import "../scss/main.scss"
import Footer from "./Footer"

export default ({ children }) => (
  <>
    <Header />
    <div className={"layout"}>
      <div>{children}</div>
    </div>
    <Footer />
  </>
)
