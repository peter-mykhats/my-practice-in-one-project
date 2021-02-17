import React from "react"
import { useSelector } from "react-redux"

const MyComputer = () => {
  const mycomps = useSelector(state => state.acc.mycomp)
  console.log(mycomps)
  return (
    <div className={"my-computer-block"}>
      <div className={"my-computer-title"}>My computer: </div>
      <div>{mycomps.title}</div>
      <div>Параметри: {mycomps.parameters}</div>
    </div>
  )
}
export default MyComputer
