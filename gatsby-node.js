const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/acesories.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              price
              image
              parameters
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(edges => {
      const alldata = edges.node.frontmatter.path
      createPage({
        path: `/shop/${edges.node.frontmatter.path}/`,
        component: postTemplate,
        context: { alldata },
      })
    })
  })
}
