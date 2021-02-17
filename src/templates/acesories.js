import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../scss/main.scss"
import { useDispatch, useSelector } from "react-redux"
import { Bay, MoneySpent } from "../redux/actions/accessoriesAction"

const Template = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const productItem = data.markdownRemark
  console.log(JSON.stringify(data, null, 4))
  const price = post.price
  const money = useSelector(state => state.acc.money)

  const dispatch = useDispatch()

  const bayHandler = () => {
    if (price > money) {
      alert("У вас недостатньо грошей")
    } else {
      dispatch(Bay(productItem))
      dispatch(MoneySpent(productItem))
      // dispatch(MoneyOff(props.comp))
      alert("Куплено")
    }
  }

  return (
    <Layout>
      <div className={"acesories container"}>
        <Link to="/shop/">Go Back</Link>
        <hr />
        {/* {money} */}
        <h1>{post.title}</h1>
        <h4>{"Параметри " + post.parameters + " з 10"}</h4>
        <h4>{"Ціна: " + post.price + " $"}</h4>
        {/* <h4>{post.image}</h4> */}
        {/* <h4>{post.path}</h4> */}
        <div className={"acesories-image-box"}>
          {<img src={post.image} alt="imagere" />}
        </div>
        <Link to="/shop/">
          <div
            className={"acesories-buy"}
            onClick={() => bayHandler(productItem)}
          >
            купити
          </div>
        </Link>
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
