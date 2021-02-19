import React from "react"
import { useSelector } from "react-redux"

const MyCamera = () => {
  const mycameras = useSelector(state => state.acc.mycamera)

  return (
    <div className={"my-computer-block"}>
      <div className={"my-computer-title"}>My camera: </div>
      <div>{mycameras.title}</div>
      <div>Параметри: {mycameras.parameters}</div>
    </div>
  )
}
export default MyCamera
