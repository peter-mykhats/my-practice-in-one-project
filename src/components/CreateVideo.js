import React, { useState } from "react"

const CreateVideo = () => {
  const [type, setType] = useState([])
  const category = [
    { type1: "vlog", text: "Створити влог" },
    { type2: "gamesReview", text: "Огляд ігор" },
    { type3: "trevel", text: "Подорож" },
  ]
  return (
    <div>
      <div>
        {category.map((item, index) => {
          return (
            <div key={index}>
              {item.text}
              <button>{item.text}</button>{" "}
            </div>
          )
        })}
        <div></div>
      </div>
    </div>
  )
}
export default CreateVideo
