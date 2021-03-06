import React from 'react'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

export default () => (
  <StaticQuery
    query={graphql`
      query ArhiveQuery {
        allMarkdownRemark(
          sort: {
            fields: [frontmatter___date]
            order: DESC
          }
          filter: {
            frontmatter: { type: { eq: "archive" } }
        	}
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                link
                date(formatString: "MMMM DD, YYYY")
                author
                type
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id='archive' className='padding-top padding-bottom'>
        <div className='col-lg-8 col-md-10 mx-auto'>
          <a href='https://medium.com/@bangladeshistry' target='blank'><h2>📚 Archive </h2></a>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <a key={node.frontmatter.title} href={node.frontmatter.link} target='blank'>
                <div className='card padding-top-lite padding-bottom-lite'>
                  <div className='card'>
                    <h4>{node.frontmatter.title}</h4>
                    <p className='card-subtitle'>Written {node.frontmatter.date}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    )}
  />
)
