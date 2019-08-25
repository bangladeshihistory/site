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
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pageContext
    let intro
    let tags = []
    let prefix
    let suffix

    for(let i = 0; i < post.frontmatter.tags.length; i += 1) {
      tags.push(<span key={i} className="badge margin-right">{post.frontmatter.tags[i]}</span>)
    }

    if (post.frontmatter.intro === true) {
      intro = (
        <header
          className='masthead'
          style={{
            backgroundImage: backgroundUrl(post.frontmatter.banner)
          }}
        >
          <div className='overlay'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-10 mx-auto'>
                <div className='post-heading'>
                  <h1 id='postTitle'>{post.frontmatter.title}</h1>
                  <p className='post-subtitle'>
                    {post.frontmatter.description}
                  </p>
                  {tags}
                  <br />
                  <small className='post-meta'>
                    By: {post.frontmatter.author}
                  </small>
                  <p id='postDate'>
                    {post.frontmatter.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
      )
    } else {
      intro = (
        <div className='container'>
          <div
            className='row'
            style={{
              paddingTop: '90px'
            }}
          >
            <div className='col-lg-8 col-md-10 mx-auto'>
              <h1 id='postTitle'>{post.frontmatter.title}</h1>
              <small className='post-subtitle'>
                {post.frontmatter.description}
              </small>
              <p>{tags}</p>
              <p className='float-right' id='postDate'>
                {post.frontmatter.date}
              </p>
            </div>
          </div>
        </div>
      )
    }

    return (
      <Layout location={this.props.location}>
        <div id='blogPost'>
          <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
          {intro}
          <div
            className='padding-top container'
          >
            <div
              className='row'
            >
              <div className='col-lg-8 col-md-10 mx-auto'>
                <br/>
                <article id={post.frontmatter.uniqueID} className='margin-top-bottom'>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </article>
              </div>
            </div>
          </div>
          <div id='nextPreviousArticles' className='margin-top-bottom container'>
            <div className='row'>
              <div className='col-sm-12 mx-auto text-center'>
                {
                  previous &&
                  <Link
                    style={{
                      boxShadow: 'none',
                    }}
                    to={previous.fields.slug}
                    rel="prev"
                  >
                    <small>← {previous.frontmatter.title}</small>
                  </Link>
                }
              </div>
              <div className='col-sm-12 mx-auto text-center'>
                {
                  next &&
                  <Link
                    style={{
                      boxShadow: 'none',
                    }}
                    to={next.fields.slug}
                    rel="next"
                  >
                    <small>{next.frontmatter.title} →</small>
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </Layout>
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
          uniqueID
          author
          description
          banner
          tags
          intro
      }
    }
  }
`
