import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  console.log(JSON.stringify(data, null, 4))

  return (
    <div>
      <Link to="/shop/">Go Back</Link>
      <hr />
      <h1>{post.title}</h1>
      <h4>{post.parameters}</h4>
      <h4>{post.price}</h4>
      <h4>{post.image}</h4>
      <h4>{post.path}</h4>
      <div className={"comp-card__img"}>
        {<img src={post.image} alt="image" />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPostById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        path
        title
        parameters
        price
        image
      }
    }
  }
`
