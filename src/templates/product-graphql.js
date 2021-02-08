import React from "react"
import { graphql, Link } from "gatsby"

const Book = ({ data }) => {
  const pageContext = data.allProductsJson.edges

  return (
    <div className="container">
      <span>Hallo</span>
      <Link to="/">go Back</Link>
      <span>{pageContext.title}</span>
    </div>
  )
}
export default Book

export const query = graphql`
  {
    allProductsJson {
      edges {
        node {
          title
          price
          parameters
          slug
        }
      }
    }
  }
`
