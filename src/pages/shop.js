import React, { useState } from "react"
import Item from "../components/Item"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Sidebar from "../components/Test"
import { useSelector } from "react-redux"

const MyShop = ({ data }) => {
  const allProducts = data.allMarkdownRemark.edges
  const categFromState = useSelector(state => state.categories)
  const [currentCategory, setcurrentCategory] = useState(null)

  const handleSwitchCategory = cat => {
    if (cat !== null) {
      setcurrentCategory(cat)
    } else {
      setcurrentCategory(null)
    }
  }

  const filteredProducts = myBookDataParam => {
    return myBookDataParam.filter(
      item => item.node.frontmatter.category === currentCategory
    )
  }

  const filteredBookData = currentCategory
    ? filteredProducts(allProducts)
    : allProducts
  // console.log("filteredBookData:::", filteredBookData)

  return (
    <Layout>
      <div className={"myshop-block"}>
        <div className={"sidebar-block"}>
          <Sidebar />
        </div>
        <div className={"myshop container"}>
          <h1>Shop page</h1>
          <h1>{currentCategory}</h1>
          {categFromState.map((item, index) => {
            return (
              <button key={index} onClick={() => handleSwitchCategory(item)}>
                {item}
              </button>
            )
          })}
          <div className={"myshop-items"}>
            {filteredBookData.map(product => {
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
            category
          }
        }
      }
    }
  }
`
