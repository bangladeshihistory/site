import React from 'react'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

let posts

export default () => (
  <StaticQuery
    query={graphql`
      query FeaturedQuery {
        allMarkdownRemark(
          filter: {
            frontmatter: { featured: { eq: true} }
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
                uniqueID
                title
                description
                shortName
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className='row'>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div
              className='col-sm' key={node.frontmatter.uniqueID}
              style={{
                textAlign: 'center'
              }}
            >
              <Link
                style={{
                  boxShadow: 'none',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
                to={node.fields.slug}
              >
                <div className='card mb-3'>
                  <div className='card-header'>
                    <p>⭐️</p>
                    <h5 className='card-text'>{node.frontmatter.title}</h5>
                  </div>
                  <div className='card-body'>
                    <small>{node.frontmatter.description}</small>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    )}
  />
)
