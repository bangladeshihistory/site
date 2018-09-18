import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                let tags = []
                let prefix
                let suffix
                let postsList

                for(let i = 0; i < node.frontmatter.tags.length; i += 1) {
                  tags.push(<span key={i} className="badge badge-secondary margin-right">{node.frontmatter.tags[i]}</span>)
                }

                if(node.frontmatter.featured === false) {
                  postsList = (
                    <div className='margin-top-bottom post-preview'>
                      <br/>
                      <Link
                        style={{ boxShadow: 'none' }}
                        to={node.fields.slug}
                      >
                        <article id={node.frontmatter.uniqueID}>
                          <h2 className='post-title'>
                            {title}
                          </h2>
                          {tags}
                          <br />
                          <small className='post-meta'>{node.frontmatter.date}</small>
                          <p className='post-subtitle'>
                            {node.frontmatter.description}
                          </p>
                          <div className='three-dots'>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
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
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
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
