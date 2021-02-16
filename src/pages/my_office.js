import React from "react"
import Layout from "../components/layout"
import { useSelector } from "react-redux"

const MyOffice = () => {
  const mon = useSelector(state => state.acc.money)
  const mycompa = useSelector(state => state.acc.mycomp)
  console.log("mycomp:::", mycompa)
  return (
    <Layout>
      <h1>My office page!!!!</h1>
      {mon}
      {/* {mycompa} */}
      {/* {mycomp.price}
      {mycomp.parameters}
      {mycomp.sku}  */}
    </Layout>
  )
}

export default MyOffice
