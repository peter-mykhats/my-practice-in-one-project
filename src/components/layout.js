import React from "react"

import Header from "./header"
// import Sidebar from "./Sidebar"
import "../scss/main.scss"

export default ({ children }) => (
  <>
    <Header />
    <div
      className={"children "}
      //   style={{ margin: `0 auto`, maxWidth: 650, backgroundColor: `#eeeeee` }}
    >
      {/* <Sidebar /> */}
      {/* <div ></div> */}
      {children}
    </div>
    <Header />
  </>
)
