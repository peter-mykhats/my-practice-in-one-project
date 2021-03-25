import React, { useState } from "react"
import Layout from "../components/layout"
import MyModal from "../components/MyModal"
import Star2 from "../components/Star2"
// import DateAndTimePickers from "../components/DataTime"
// import CreateVideo from "../components/CreateVideo"
// import New from "../components/New"

export default function Home() {
  const [activeModal, setActiveModal] = useState(true)
  return (
    <Layout>
      <h1>Main page!!!!</h1>
      <Star2 />
      {/* <DateAndTimePickers /> */}
      {/* <CreateVideo /> */}
      {/* <New /> */}
      <button onClick={() => setActiveModal(true)}>Modal</button>
      <MyModal active={activeModal} setActive={setActiveModal}>
        <form>
          <input placeholder="input your name" />
          <button>ok</button>
        </form>
      </MyModal>
    </Layout>
  )
}
