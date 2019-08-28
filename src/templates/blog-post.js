import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import typography from '../utils/typography'

const backgroundUrl = (path) => {
  const prefix = 'url('
  const suffix = ')'

  return prefix + path + suffix
}

class BlogPostTemplate extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}></Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
          date(formatString: "MMMM DD, YYYY")
          author
          tags
      }
    }
  }
`
