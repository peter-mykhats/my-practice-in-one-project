import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Item from "../components/Item"

const MyShop = ({ data }) => {
  const product = data.allProductsJson.edges
  return (
    <Layout>
      <div className={"myshop container"}>
        <h1>Shop page</h1>
        <div className={"myshop-items container"}>
          {product.map(comp => {
            return <Item key={comp.node.id} compitem={comp.node} />
          })}
        </div>
        <pre>{JSON.stringify(data, null, 4)}</pre>
      </div>
    </Layout>
  )
}
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
// export const query = graphql`
//   {
//     file(size: {}) {
//       id
//       childImageSharp {
//         children {
//           ... on File {
//             id
//             name
//             birthTime(difference: "", formatString: "", fromNow: true)
//           }
//         }
//       }
//     }
//     markdownRemark {
//       id
//     }
//   }
// `
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
        }
      }
    }
  }
`
export default MyShop
