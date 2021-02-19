import React from "react"
import { useSelector } from "react-redux"

const MyPhone = () => {
  const myphones = useSelector(state => state.acc.myphone)
  console.log("myphones:::", myphones)
  return (
    <div className={"my-computer-block"}>
      <div className={"my-computer-title"}>My phone: </div>
      <div>{myphones.title}</div>
      <div>Параметри: {myphones.parameters}</div>
    </div>
  )
}
export default MyPhone
