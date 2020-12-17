const CATEGORY_COLORS = ['blue-600', 'gray-800', 'blue-300', 'teal-300']
const CATEGORY_COLOR_EXTRA = 'gray-800'

module.exports = {
  CATEGORY_COLORS,
  CATEGORY_COLOR_EXTRA,
  getAllCategories: async graphql => {
    const {
      data: {
        allMarkdownRemark: { group }
      }
    } = await graphql(`
      query CategoriesListQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `)

    return group.map((cat, i) => ({
      ...cat,
      categoryColor: CATEGORY_COLORS[i] || CATEGORY_COLOR_EXTRA
    }))
  }
}
