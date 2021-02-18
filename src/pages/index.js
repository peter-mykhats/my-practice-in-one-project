import React from "react"
import Layout from "../components/layout"
import Star2 from "../components/Star2"
import DateAndTimePickers from "../components/DataTime"

export default function Home() {
  return (
    <Layout>
      <h1>Main page</h1>
      <Star2 />
      <DateAndTimePickers />
    </Layout>
  )
}
