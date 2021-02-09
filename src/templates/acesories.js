import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Template = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  console.log(JSON.stringify(data, null, 4))

  return (
    <Layout>
      <div className={"acesories container"}>
        <Link to="/shop/">Go Back</Link>
        <hr />
        <h1>{post.title}</h1>
        <h4>{"Параметри " + post.parameters + " з 10"}</h4>
        <h4>{"Ціна: " + post.price + " $"}</h4>
        {/* <h4>{post.image}</h4> */}
        {/* <h4>{post.path}</h4> */}
        <div className={"acesories-image-box"}>
          {<img src={post.image} alt="imagere" />}
        </div>
        <div className={"acesories-buy"}>купити</div>
        <hr />
        <Link to="/shop/">Go Back</Link>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default Template

export const postQuery = graphql`
  query BlogPostById($alldata: String!) {
    markdownRemark(frontmatter: { path: { eq: $alldata } }) {
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
