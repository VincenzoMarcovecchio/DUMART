const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  fmImagesToRelative(node)

  if (node.internal.type === 'MarkdownRemark') {
    if (typeof node.frontmatter.slug !== 'undefined') {
      createNodeField({
        node,
        name: 'slug',
        value: node.frontmatter.slug
      })
    } else {
      const value = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: 'slug',
        value
      })
    }

    if (node.frontmatter.tags) {
      const tagSlugs = node.frontmatter.tags.map(tag => `/tag/${tag}`)
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
    }

    if (node.frontmatter.category) {
      const categorySlug = `/categorie/${node.frontmatter.category}`
      createNodeField({ node, name: 'categorySlug', value: categorySlug })
    }
  }
}

module.exports = onCreateNode
