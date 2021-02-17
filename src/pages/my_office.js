import React from "react"
import Layout from "../components/layout"
import { useSelector } from "react-redux"
import MyComputer from "../components/MyComputer"

const MyOffice = () => {
  const mon = useSelector(state => state.acc.money)
  const mycomp = useSelector(state => state.acc.mycomp)
  const myphone = useSelector(state => state.acc.myphone)
  console.log("mycomp:::", mycomp)
  return (
    <Layout>
      <h1>My office page!!!!</h1>
      {/* {mon} */}
      {/*<p>{JSON.stringify(mycomp[0].title)}</p>
      <br />
      {mycomp[0].title}
      <br />
      {myphone.title} */}

      {/* <p> */}
      {/* {mycomp.map((item, index) => {
        return <button key={index}>title: {item.title}</button>
      })} */}
      {/* </p> */}
      {/* 
      {mycomp.parameters}
      {mycomp.sku}  */}
      <MyComputer />
    </Layout>
  )
}

export default MyOffice
