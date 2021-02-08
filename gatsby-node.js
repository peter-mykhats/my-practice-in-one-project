// exports.onCreateNode = ({ node }) => {
//   console.log(`Node created of type "${node.internal.type}"`)
// }
// const path = require("path")

// exports.createPages = async ({ actions: { createPage }, graphql }) => {
//   const results = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               path
//               title
//               price
//               image
//               parameters
//             }
//           }
//         }
//       }
//     }
//   `)
//   results.data.allMarkdownRemark.edges.forEach(edge => {
//     const product = edge.node
//     createPage({
//       path: `/my_office/${product.id}/`,
//       component: require.resolve("./src/templates/acesories.js"),
//       context: {
//         path: product.path,
//       },
//     })
//   })
// }

// ====

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
