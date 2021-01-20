import React, { Component } from "react"

import Layout from "../../components/layout"
import Sidebar from "../../components/Sidebar"
import "../../scss/main.scss"

const Component_1 = () => {
  return (
    <Layout>
      <div className="my-component container">
        <h1>My component_1</h1>
        <Sidebar />
      </div>
    </Layout>
  )
}
export default Component_1
