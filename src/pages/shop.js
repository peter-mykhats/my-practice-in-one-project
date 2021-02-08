import React from "react"
import Item from "../components/Item"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const MyShop = ({ data }) => {
  const allProducts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className={"myshop container"}>
        <h1>Shop page</h1>
        <div className={"myshop-items"}>
          {allProducts.map(product => {
            return <Item key={product.node.id} productItem={product.node} />
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            image
            parameters
            path
            price
            title
          }
        }
      }
    }
  }
`

export default MyShop
