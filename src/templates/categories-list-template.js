import React from 'react'
import { Link } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Page from '../components/Page'
import { useSiteMetadata, useCategoriesList } from '../hooks'

const CategoriesListTemplate = () => {
  const { title, subtitle, keywords } = useSiteMetadata()
  const categories = useCategoriesList()

  return (
    <Layout title={`Categoria - ${title}`} description={subtitle} keywords={keywords}>
      <Sidebar />
      <Page title="Categories">
        <ul>
          {categories.map(category => (
            <li key={category.fieldValue}>
              <Link to={`/categoria/${category.fieldValue}/`}>
                {category.fieldValue} ({category.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  )
}

export default CategoriesListTemplate
