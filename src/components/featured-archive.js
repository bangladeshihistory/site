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
                uniqueID
                author
                type
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
      <div id='archive' className='padding-top padding-bottom'>
        <div className='container text-center'>
          <h1> Archive </h1>
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
                        <h2>{node.frontmatter.shortName}</h2>
                        <h4 className='card-text'>{node.frontmatter.title}</h4>
                        <small className='card-text'>By: {node.frontmatter.author}</small>
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
        </div>
      </div>
    )}
  />
)
