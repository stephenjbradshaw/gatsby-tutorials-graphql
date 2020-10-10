const { createFilePath } = require(`gatsby-source-filesystem`)

// Data in gatsby is organized as nodes in a graph

/* 
  When a node is created by the remark transformer plugin (i.e. as a page is created from markdown):
  Get the parent (file) node and make a slug out of it using createFilePath()
  ```
  exports.onCreateNode = ({ node, getNode }) => {
    if (node.internal.type === `MarkdownRemark`) {
      console.log(createFilePath({node, getNode, basePath: `pages`}))
    }
  }  
  ```
*/

/*
 Generate a slug as above
 Then edit the node you got it from to add a new field with the slug (createNodeField)
 This value can then be read with graphql!! (see next step)
 */


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
