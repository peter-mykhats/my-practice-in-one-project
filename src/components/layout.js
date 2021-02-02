import React from "react"

import Header from "./header"
import Sidebar from "./sidebar"
import "../scss/main.scss"
import Footer from "./Footer"

export default ({ children }) => (
  <>
    <Header />
    <div className={"layout"}>
      <div className={"col-2 "}>
        <Sidebar />
      </div>
      <div>{children}</div>
    </div>
    <Footer />
  </>
)
