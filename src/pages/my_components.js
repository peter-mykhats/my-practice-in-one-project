import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
// import "../scss/main.scss"

const My_component = () => {
  return (
    <Layout>
      <div>
        {/* className="my-component container" */}
        <h1>My component</h1>
        <Sidebar />
      </div>
    </Layout>
  )
}
export default My_component
