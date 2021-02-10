import React from "react"
import Item from "../components/Item"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import Sidebar from "../components/Sidebar"

const MyShop = ({ data }) => {
  const allProducts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className={"myshop-block"}>
        <div className={"sidebar-block"}>
          {/* <Sidebar /> */}
        </div>
        <div className={"myshop container"}>
          <h1>Shop page</h1>
          <div className={"myshop-items"}>
            {allProducts.map(product => {
              return <Item key={product.node.id} productItem={product.node} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default MyShop

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
