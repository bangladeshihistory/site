import React from 'react'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

let posts

export default () => (
  <StaticQuery
    query={graphql`
      query ResourceQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { type: { eq: "resource" } }
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
      <div id='resources' className='padding-top padding-bottom'>
        <div className='col-lg-8 col-md-10 mx-auto'>
          <h2>📎 Resources </h2>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <a key={node.frontmatter.title} href={node.frontmatter.link} target='blank'>
                <div className='card padding-top-lite padding-bottom-lite'>
                  <div className='card'>
                    <h4>{node.frontmatter.title}</h4>
                    <p className='card-subtitle'> {node.frontmatter.author}</p>
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
