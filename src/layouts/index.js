import React from 'react'
import Link from 'gatsby-link'

import bootstrapCSS from './bootstrap.css'
import cleanBlogCSS from './clean-blog.min.css'

import { scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
          }}
        >

          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            🚀
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            🚀
          </Link>
        </h3>
      )
    }
    return (
      <div
        className='container'
      >
        <nav
          className='navbar navbar-expand-lg navbar-light fixed-top'
          id='mainNav'
        >
          {header}
        </nav>
        {children()}
      </div>
    )

    require('../utils/vendor/jquery/jquery.min.js')
    require('../utils/vendor/bootstrap/js/bootstrap.bundle.min.js')
    require('../utils/js/clean-blog.min.js')
  }
}

export default Template
