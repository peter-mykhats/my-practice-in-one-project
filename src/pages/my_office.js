import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const MyOffice = ({ data }) => {
  const contecstData = data.allMarkdownRemark.edges
  return (
    <Layout>
      <h1>My office page</h1>

      {contecstData.map(accesor => (
        <div key={accesor.node.id}>
          <h2>{accesor.node.frontmatter.title}</h2>
          <h3>{accesor.node.frontmatter.parameters}</h3>
          <h3>{accesor.node.frontmatter.path}</h3>
          <h3>{accesor.node.frontmatter.price}</h3>
          <span>-----</span>
          <Link to={accesor.node.id}>Read More</Link>
          <hr />
        </div>
      ))}
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

export default MyOffice
