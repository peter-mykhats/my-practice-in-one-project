import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Item from "../components/Item"

const MyOffice = ({ data }) => {
  const products = data.allProductsJson.edges
  return (
    <Layout>
      <div className={"myshop container"}>
        <h1>Shop page</h1>
        <div className={"myshop-items"}>
          {products.map(comp => {
            return <Item key={comp.node.id} compitem={comp.node} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allProductsJson {
      edges {
        node {
          title
          price
          parameters
          slug
          id
          image
        }
      }
    }
  }
`
export default MyOffice
