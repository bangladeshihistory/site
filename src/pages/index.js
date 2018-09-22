import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div className='container padding-top'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.shortName') || node.frontmatter.title
                let tags = []
                let prefix
                let suffix
                let postsList

                for(let i = 0; i < node.frontmatter.tags.length; i += 1) {
                  tags.push(<span key={i} className='badge badge-secondary margin-right'>{node.frontmatter.tags[i]}</span>)
                }

                if(node.frontmatter.featured === false) {
                  postsList = (
                    <div className='margin-top-bottom post-preview'>
                      <Link
                        style={{ boxShadow: 'none' }}
                        to={node.fields.slug}
                      >
                        <article id={node.frontmatter.uniqueID}>
                          <h2 className='post-title'>
                            {title}
                          </h2>
                          <h4 className='post-subtitle'>
                            {node.frontmatter.title}
                          </h4>
                          <p className='post-subtitle'>
                            {node.frontmatter.description}
                          </p>
                          {tags}
                          <br />
                          <small className='post-meta'>{node.frontmatter.date}</small>
                        </article>
                      </Link>
                    </div>
                  )
                }

                return (
                  <div key={node.fields.slug}>
                    {postsList}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            uniqueID
            description
            shortName
            layout
            featured
            banner
            tags
          }
        }
      }
    }
  }
`
