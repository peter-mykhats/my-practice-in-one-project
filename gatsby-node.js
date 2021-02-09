const path = require("path")

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

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
      const id = edges.node.id
      createPage({
        path: `/shop/${edges.node.id}/`,
        component: postTemplate,
        context: { id },
      })
    })
  })
}
